import { Router } from "express";
import { Note } from "../models/Note";

const router = Router();

router.get("/", async (_, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({ title, content });
  res.json(note);
});

router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
