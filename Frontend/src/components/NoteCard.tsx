import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt?: string;
}

const NoteCard: React.FC<{ note: Note; onDelete: (id: string) => void; index: number }> = ({ note, onDelete, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 14, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, delay: index * 0.04, ease: "power2.out" }
    );
  }, [index]);

  return (
    <div ref={ref} className="note-card">
      <div className="note-head">
        <h3>{note.title}</h3>
        <button className="delete" onClick={() => onDelete(note._id)}>✕</button>
      </div>
      <p className="note-body">{note.content}</p>
      <div className="note-meta">{note.createdAt ? new Date(note.createdAt).toLocaleString() : ""}</div>
    </div>
  );
};

export default NoteCard;
