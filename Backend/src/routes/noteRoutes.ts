// backend/src/routes/noteRoutes.ts
import { Router } from "express";
import { Note } from "../models/Note";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

// GET /notes  -> notes for current user
router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const notes = await Note.find({ userId: req.userId }).sort({ createdAt: -1 });
  res.json(notes);
});

// POST /notes
router.post("/", requireAuth, async (req: AuthRequest, res) => {
  const { title, content } = req.body;
  const note = await Note.create({ userId: req.userId, title, content });
  res.json(note);
});

// DELETE /notes/:id
router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  const id = req.params.id;
  await Note.findOneAndDelete({ _id: id, userId: req.userId });
  res.json({ message: "Deleted" });
});

export default router;
