import React from "react";

import { gsap } from "gsap";

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">

      {/* HERO */}
      <section className="landing-hero">
        <h1>QuickNote AI</h1>
        <p className="muted">
          A fast, secure note-taking app with a modern dashboard.
          Built for focus and productivity.
        </p>

        <div className="cta-row">
          <Link to="/register" className="btn primary">Get Started</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </section>

      {/* WHY */}
      <section className="landing-section">
        <h2>Why QuickNote?</h2>
        <div className="feature-grid">
          <Feature title="Fast & Minimal" desc="No clutter. Capture ideas instantly." />
          <Feature title="Secure & Private" desc="Your notes belong only to you." />
          <Feature title="Modern Dashboard" desc="Clean UI designed for productivity." />
        </div>
      </section>

      {/* HOW */}
      <section className="landing-section">
        <h2>How it works</h2>
        <ol className="steps">
          <li>Create an account</li>
          <li>Add your notes</li>
          <li>Access them anytime</li>
        </ol>
      </section>

      {/* FINAL CTA */}
      <section className="landing-final">
        <h2>Start organizing your thoughts</h2>
        <Link to="/register" className="btn primary">Create Free Account</Link>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <p className="muted">
          Built by Lelien Panda • 
          <a href="https://github.com/lelixn/QuickNote" target="_blank"> GitHub</a>
        </p>
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p className="muted">{desc}</p>
    </div>
  );
}
