import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <div className="page settings">
      <h2>Settings</h2>
      <div className="glass" style={{ marginTop: 12, padding: 16 }}>
        <p className="muted">No settings yet — you can add account or export features here later.</p>
      </div>
    </div>
  );
};

export default SettingsPage;
