import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/Dashboard";
import NotesPage from "./pages/NotesPage";
import SettingsPage from "./pages/Settings";
import { gsap } from "gsap";

/**
 * RouteTransition: animates page content when location changes
 * We use a keyed wrapper so React will re-create it on pathname change
 */
const RouteTransition: React.FC = () => {
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    // simple fade/slide up animation
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 12, scale: 0.995 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" }
    );
  }, [location.pathname]);

  return (
    <div className="route-wrapper" ref={wrapperRef}>
      <Outlet />
    </div>
  );
};

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app">
      <Sidebar collapsed={collapsed} />
      <div className="main">
        <Navbar onToggle={() => setCollapsed((s) => !s)} />
        <main className="content">
          <section className="panel">
            <Routes>
              {/* RouteTransition will animate on every path change */}
              <Route element={<RouteTransition />}>
                <Route index element={<DashboardPage />} />
                <Route path="notes" element={<NotesPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
            </Routes>
          </section>
        </main>
      </div>
    </div>
  );
}
