import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const nav = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      nav("/notes");
    } catch (error: any) {
      setErr(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form glass" onSubmit={submit}>
        <h2>Login</h2>
        {err && <div className="error">{err}</div>}
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button className="btn primary" type="submit">Login</button>
        <p className="muted">Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}
