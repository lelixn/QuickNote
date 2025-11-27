import { useEffect, useState } from "react";
import NoteCard from "./components/NoteCard";
import { api } from "./services/api";
import "./styles.css";

type Note = {
  _id: string;
  title: string;
  content: string;
};

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [form, setForm] = useState({ title: "", content: "" });

  const getNotes = async () => {
    const res = await api.get("/notes");
    setNotes(res.data);
  };

  const createNote = async () => {
    if (!form.title) return;
    await api.post("/notes", form);
    setForm({ title: "", content: "" });
    getNotes();
  };

  const deleteNote = async (id: string) => {
    await api.delete(`/notes/${id}`);
    getNotes();
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="container">
      <h1>QuickNote AI</h1>

      <div className="input-box">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button onClick={createNote}>Add Note</button>
      </div>

      <div className="grid">
        {notes.map((n) => (
          <NoteCard key={n._id} note={n} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}
