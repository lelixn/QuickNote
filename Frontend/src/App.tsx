import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { gsap } from "gsap";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotesPage from "./pages/NotesPage"; // protected
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";
import { useAuth } from "./context/AuthContext";

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
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    // public routes
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    );
  }

  // logged-in layout with sidebar + navbar and protected routes (as earlier)
  return (
    <div className="app">
      <Sidebar collapsed={false} />
      <div className="main">
        <Navbar onToggle={() => {}} />
        <main className="content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<DashboardPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}





























// export default function App() {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div className="app">
//       <Sidebar collapsed={collapsed} />
//       <div className="main">
//         <Navbar onToggle={() => setCollapsed((s) => !s)} />
//         <main className="content">
//           <section className="panel">
//             <Routes>
//               <Route path="/" element={<Landing />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />

//               {/* protected routes */}
//               <Route
//                 path="/dashboard"
//                 element={
//                   <ProtectedRoute>
//                     <DashboardPage />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/notes"
//                 element={
//                   <ProtectedRoute>
//                     <NotesPage />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/settings"
//                 element={
//                   <ProtectedRoute>
//                     <SettingsPage />
//                   </ProtectedRoute>
//                 }
//               />

//               {/* fallback */}
//               <Route path="*" element={<Landing />} />
//             </Routes>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }
