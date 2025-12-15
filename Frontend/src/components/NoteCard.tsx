import { useState } from "react";
import { api } from "../services/api";

interface Note {
  _id: string;
  title: string;
  content: string;
}

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
  disabled?: boolean;
}

export default function NoteCard({ note, onDelete, disabled = false }: NoteCardProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const summarize = async () => {
    setLoadingAI(true);
    setError(null);

    try {
      const res = await api.post(`/ai/summarize/${note._id}`);
      setSummary(res.data.summary);
    } catch {
      setError("AI failed to summarize");
    } finally {
      setLoadingAI(false);
    }
  };

  return (
    <div className="note-card">
      <div className="note-head">
        <h3>{note.title}</h3>
        <button onClick={() => onDelete(note._id)} disabled={disabled}>✕</button>
      </div>

      <p>{note.content}</p>

      {summary && (
        <div className="ai-summary">
          <strong>AI Summary:</strong>
          <p>{summary}</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}

      <button
        className="btn"
        onClick={summarize}
        disabled={loadingAI}
      >
        {loadingAI ? "Summarizing…" : "Summarize"}
      </button>
    </div>
  );
}
