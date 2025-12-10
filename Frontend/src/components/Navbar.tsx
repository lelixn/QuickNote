import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  return (
    <header className="navbar">
      <button className="hamburger" onClick={onToggle} aria-label="toggle">
        ☰
      </button>

      <Link to="/" className="brand">QuickNote AI</Link>

      <div className="nav-actions">
        <Link to="/notes" className="nav-link">Notes</Link>
        <div className="avatar">LP</div>
      </div>
    </header>
  );
};

export default Navbar;
