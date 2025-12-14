
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardPage from "./pages/Dashboard";
import NotesPage from "./pages/NotesPage";
import SettingsPage from "./pages/Settings";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function App() {
  const { user, loading } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  // wait until /auth/me resolves
  if (loading) {
    return <div style={{ padding: 40 }}>Loading...</div>;
  }

 
  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  // 🔒 PRIVATE ROUTES (LOGGED IN)
  return (
    <div className="app">
      <Sidebar collapsed={collapsed} />

      <div className="main">
        <Navbar onToggle={handleToggle} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
