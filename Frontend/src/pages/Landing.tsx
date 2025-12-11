import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Landing() {
  React.useEffect(() => {
    gsap.from(".hero-card", { opacity: 0, y: 18, duration: 0.6 });
  }, []);

  return (
    <div className="landing">
      <div className="landing-inner">
        <div className="hero-left">
          <h1>QuickNote AI</h1>
          <p className="muted">Fast, focused notes with a modern dashboard. Sign up and start capturing ideas.</p>
          <div style={{ marginTop: 18 }}>
            <Link to="/register" className="btn primary" style={{ marginRight: 12 }}>Get Started</Link>
            <Link to="/login" className="btn">Login</Link>
          </div>
        </div>

        <div className="hero-card glass" aria-hidden>
          <div style={{ padding: 18 }}>
            <h3 style={{ margin: 0 }}>Your notes — everywhere</h3>
            <p className="muted" style={{ marginTop: 8 }}>Create notes, tag them and access them across devices.</p>
            <div style={{ marginTop: 12 }}>
              <div style={{ background: "#0e0f12", padding: 12, borderRadius: 10 }}>Example note preview...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
