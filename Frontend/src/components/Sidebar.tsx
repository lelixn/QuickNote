import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" className={({ isActive }) => (isActive ? "active" : "")}>
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">v1.0</div>
    </aside>
  );
};

export default Sidebar;
