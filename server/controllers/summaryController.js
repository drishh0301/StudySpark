const Note = require("../models/Note");
const { askGemini } = require("../services/geminiService");

const generateSummary = async (req, res) => {
    try {
        const { noteId, content } = req.body;
        console.log("Received noteId:", noteId);
        console.log("Received content length:", content.length);

        if (!content || !content.trim()) {
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
            { returnDocument: "after" },
        );

        if (!updatedNote) {
            return res.status(404).json({
                message: "Note not found.",
            });
        }

        res.status(200).json({
            message: "Summary generated successfully",
            summary: updatedNote.summary,
        });
    } catch (error) {
        console.error(error);

        res.status(error.status || 500).json({
            message: error.message || "Failed to generate summary",
        });
    }
};

module.exports = {
    generateSummary,
};
