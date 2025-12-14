import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./styles.css";
import { NotesMetaProvider } from "./context/NotesContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesMetaProvider>
          <App />
        </NotesMetaProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
