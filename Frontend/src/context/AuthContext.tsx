// frontend/src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { api, setAuthToken } from "../services/api";

type User = { id: string; name: string; email: string } | null;

interface AuthContextType {
  user: User;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("qna_token"));
  const [loading, setLoading] = useState<boolean>(!!token);

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      api.get("/auth/me").then((res) => { setUser(res.data); setLoading(false); }).catch(() => { setToken(null); localStorage.removeItem("qna_token"); setLoading(false); });
    } else {
      setAuthToken(undefined);
      setLoading(false);
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    const t = res.data.token;
    localStorage.setItem("qna_token", t);
    setToken(t);
    setAuthToken(t);
    setUser(res.data.user);
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await api.post("/auth/register", { name, email, password });
    const t = res.data.token;
    localStorage.setItem("qna_token", t);
    setToken(t);
    setAuthToken(t);
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("qna_token");
    setToken(null);
    setUser(null);
    setAuthToken(undefined);
  };

  return <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>{children}</AuthContext.Provider>;
};
