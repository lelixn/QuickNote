import React, { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import { api } from "../services/api";

type NoteType = { _id: string; title: string; content: string; createdAt?: string };

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (title: string, content: string) => {
    try {
      const res = await api.post("/notes", { title, content });
      setNotes((p) => [res.data, ...p]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes((p) => p.filter((n) => n._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page notes-page">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ margin: 0 }}>Notes</h2>
          <p className="muted" style={{ marginTop: 6 }}>All notes saved to your DB</p>
        </div>
      </div>

      <NoteForm onAdd={addNote} />

      <div className="notes-grid">
        {loading && <div className="placeholder">Loading…</div>}
        {!loading && notes.length === 0 && <div className="placeholder">No notes yet. Add one above ✍️</div>}
        {notes.map((n, idx) => (
          <NoteCard note={n} onDelete={deleteNote} key={n._id} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
