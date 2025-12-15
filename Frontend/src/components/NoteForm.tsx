// src/components/NoteForm.tsx
import { useState } from "react";

export default function NoteForm({
  onAdd,
  disabled
}: {
  onAdd: (title: string, content: string) => void;
  disabled?: boolean;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form className="glass note-form" onSubmit={submit}>
      <input
        className="input-title"
        placeholder="Title"
        value={title}
        disabled={disabled}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="input-content"
        placeholder="Write your note..."
        value={content}
        disabled={disabled}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        className="btn primary"
        disabled={disabled || !title.trim()}
        type="submit"
      >
        {disabled ? "Saving..." : "Add Note"}
      </button>
    </form>
  );
}
