import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface NoteProps {
  note: any;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.4
    });
  }, []);

  return (
    <div ref={cardRef} className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onDelete(note._id)}>Delete</button>
    </div>
  );
}
