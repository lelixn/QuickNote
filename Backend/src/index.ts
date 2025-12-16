// backend/src/index.ts
import express from "express";
import cors from "cors";

import { env } from "./config/env";
import { connectDB } from "./config/db";

import authRoutes from "./routes/authRoutes";
import noteRoutes from "./routes/noteRoutes";
import aiRoutes from "./routes/aiRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("/ai", aiRoutes);

// start server ONLY after DB connects
const startServer = async () => {
  await connectDB();

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
  });
};

startServer();