// src/pages/NotesPage.tsx
import { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import { api } from "../services/api";
import { useNotesMeta } from "../context/NotesContext";

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt?: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setCount } = useNotesMeta();

  // 🔹 Fetch notes
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await api.get("/notes");
      setNotes(res.data);
      setCount(res.data.length);
    } catch {
      setError("Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // 🔹 Optimistic add
  const addNote = async (title: string, content: string) => {
    if (!title.trim()) return;

    setError(null);
    setSaving(true);

    const tempNote: Note = {
      _id: "temp-" + Date.now(),
      title,
      content,
      createdAt: new Date().toISOString()
    };

    // optimistic UI
    setNotes((prev) => [tempNote, ...prev]);
    setCount((notes.length + 1));

    try {
      const res = await api.post("/notes", { title, content });

      // replace temp note with real one
      setNotes((prev) =>
        prev.map((n) => (n._id === tempNote._id ? res.data : n))
      );
    } catch {
      // rollback
      setNotes((prev) => prev.filter((n) => n._id !== tempNote._id));
      setCount(notes.length); // roll back count to actual notes length
      setError("Failed to save note");
    } finally {
      setSaving(false);
    }
  };

  // 🔹 Delete note
  const deleteNote = async (id: string) => {
    const backup = notes;
    setNotes((prev) => prev.filter((n) => n._id !== id));
    setCount(notes.length - 1);

    try {
      await api.delete(`/notes/${id}`);
    } catch {
      setNotes(backup);
      setCount(backup.length);
      setError("Failed to delete note");
    }
  };

  return (
    <div className="page">
      
      <div>
        <h2>Notes</h2>
        <p className="muted">All your notes in one place</p>
      </div>

      
      {error && <div className="error">{error}</div>}

      {/* FORM */}
      <NoteForm onAdd={addNote} />

      {/* CONTENT */}
      {loading ? (
        <div className="placeholder">Loading notes...</div>
      ) : notes.length === 0 ? (
        <div className="placeholder">
          You don’t have any notes yet. Start by adding one ✍️
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map((note, idx) => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={deleteNote}
            />
          ))}
        </div>
      )}
    </div>
  );
}
