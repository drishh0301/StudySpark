const Note = require("../models/Note");
const { askGemini } = require("../services/geminiService");

const generateSummary = async (req, res) => {
  try {
    const { noteId, content } = req.body;

    if (!content) {
      return res.status(400).json({
        message: "Note content is required",
      });
    }

    const prompt = `
You are an AI study assistant.

Summarize the following notes in 5-8 concise bullet points.

Return ONLY the summary text.

Notes:
${content}
`;

    const summary = await askGemini(prompt);

    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { summary },
      { new: true }
    );

    res.status(200).json({
      message: "Summary generated successfully",
      summary: updatedNote.summary,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to generate summary",
    });
  }
};

module.exports = {
  generateSummary,
};