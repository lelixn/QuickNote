import express from "express";
import cors from "cors";
import { connectDB } from "./db";
import noteRoutes from "./routes/noteRoutes";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/notes", noteRoutes);

app.listen(4000, () => console.log("🚀 Server running on 4000"));
