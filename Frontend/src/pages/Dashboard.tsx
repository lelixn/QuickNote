import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="page dashboard">
      <div className="intro">
        <h2>Welcome back 👋</h2>
        <p className="muted">Capture ideas, tasks and notes — fast.</p>
      </div>

      <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
        <div className="glass" style={{ padding: 18 }}>
          <h3 style={{ margin: 0 }}>Quick Stats</h3>
          <p className="muted" style={{ marginTop: 8 }}>You have X notes · Last saved 5m ago</p>
        </div>

        <div className="glass" style={{ padding: 18 }}>
          <h3 style={{ margin: 0 }}>Tips</h3>
          <ul style={{ marginTop: 8, color: "var(--muted)" }}>
            <li>Use tags to organize notes</li>
            <li>Navigate to Notes to add & manage notes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
