
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <h1 className="brand">QuickNote AI</h1>

      <div className="nav-actions">
        <span className="muted">{user?.name}</span>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
}
