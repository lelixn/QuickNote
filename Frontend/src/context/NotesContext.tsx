import React, { createContext, useContext, useState } from "react";

type NotesCtx = {
  count: number;
  setCount: (n: number) => void;
};

const Ctx = createContext<NotesCtx | null>(null);

export const useNotesMeta = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useNotesMeta must be used inside NotesMetaProvider");
  return v;
};

export const NotesMetaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  return <Ctx.Provider value={{ count, setCount }}>{children}</Ctx.Provider>;
};

export default NotesMetaProvider;