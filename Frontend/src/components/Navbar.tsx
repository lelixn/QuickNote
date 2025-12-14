import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [busy, setBusy] = useState(false);

  const onLogout = () => {
    setBusy(true);
    logout();
    // App.tsx will redirect automatically
  };

  return (
    <header className="navbar">
      <h1 className="brand">QuickNote AI</h1>
      <div className="nav-actions">
        <span className="muted">{user?.name}</span>
        <button className="btn" onClick={onLogout} disabled={busy}>
          {busy ? "Logging out…" : "Logout"}
        </button>
      </div>
    </header>
  );
}
