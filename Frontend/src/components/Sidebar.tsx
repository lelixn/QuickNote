import { NavLink } from "react-router-dom";
import { useNotesMeta } from "../context/NotesContext";

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  const { count } = useNotesMeta();

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" className={({ isActive }) => (isActive ? "active" : "")}>
              Notes <span className="badge">{count}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
