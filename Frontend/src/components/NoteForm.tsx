import React, { useState } from "react";

interface Props {
  onAdd: (title: string, content: string) => void;
}

const NoteForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), content.trim());
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form glass" onSubmit={submit}>
      <input
        className="input-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className="input-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note..."
        rows={4}
      />
      <button className="btn primary" type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
