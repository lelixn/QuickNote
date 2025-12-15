import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNotesMeta } from "../context/NotesContext";

type Note = {
  _id: string;
  title: string;
  createdAt?: string;
};

export default function DashboardPage() {
  const { user } = useAuth();
  const { count } = useNotesMeta();

  const [latestNote, setLatestNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        setLoading(true);
        const res = await api.get("/notes");
        if (res.data.length > 0) {
          setLatestNote(res.data[0]); 
        }
      } catch {
        
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, []);

  return (
    <div className="page">
     
      <div>
        <h2>Welcome back, {user?.name} 👋</h2>
        <p className="muted">Here’s a quick overview of your activity</p>
      </div>

     
      <div className="dashboard-grid">
        <div className="glass card">
          <h3>Total Notes</h3>
          <p className="stat">{count}</p>
        </div>

        <div className="glass card">
          <h3>Latest Activity</h3>
          {loading ? (
            <p className="muted">Loading...</p>
          ) : latestNote ? (
            <>
              <p className="stat">{latestNote.title}</p>
              <p className="muted">
                {latestNote.createdAt
                  ? new Date(latestNote.createdAt).toLocaleString()
                  : ""}
              </p>
            </>
          ) : (
            <p className="muted">No notes yet</p>
          )}
        </div>
      </div>

      
      <div className="glass card">
        <h3>Tips</h3>
        <ul className="muted">
          <li>Add short, clear titles to find notes faster</li>
          <li>Review notes regularly to stay organized</li>
        </ul>
      </div>
    </div>
  );
}
