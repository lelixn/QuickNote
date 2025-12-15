import { Router } from "express";
import { openai } from "../lib/openai";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { Note } from "../models/Note";

const router = Router();

router.post("/summarize/:id", requireAuth, async (req: AuthRequest, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      userId: req.userId
    });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    const prompt = `
Summarize the following note in 2–3 concise sentences:

${note.title}
${note.content}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });

    const summary = completion.choices[0].message.content;

    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "AI summarization failed" });
  }
});

export default router;
