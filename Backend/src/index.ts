
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import noteRoutes from "./routes/noteRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/quicknote-ai";
const PORT = Number(process.env.PORT || 4000);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI).then(() => console.log("✅ MongoDB connected")).catch((e) => console.error(e));

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
app.get("/", (req, res) => {
  res.send("QuickNote AI Backend is running");
});