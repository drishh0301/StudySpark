const Flashcard = require("../models/Flashcard");
const { askGemini } = require("../services/geminiService");

const getFlashcardStats = async (req, res) => {
    try {
        const count = await Flashcard.countDocuments({ userId: req.user.id });
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch flashcard stats",
            error: error.message,
        });
    }
};

const getFlashcardsByNote = async (req, res) => {
    try {
        const { noteId } = req.params;

        const flashcards = await Flashcard.find({
            noteId,
            userId: req.user.id,
        }).sort({ createdAt: 1 });

        res.status(200).json({ flashcards });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch flashcards",
            error: error.message,
        });
    }
};

const generateFlashcards = async (req, res) => {
    try {
        const { noteId, content } = req.body;

        if (!content) {
            return res.status(400).json({
                message: "Note content is required",
            });
        }

        // Roughly 1 flashcard per 100 words, kept between 5 and 15
        const wordCount = content.trim().split(/\s+/).length;
        const cardCount = Math.min(15, Math.max(5, Math.ceil(wordCount / 100)));

        const prompt = `
You are an AI study assistant.

Read the following notes carefully and generate EXACTLY ${cardCount} flashcards.

Each flashcard should have:
- question
- answer

Return ONLY a valid JSON array.

Example:
[
  {
    "question": "What is an Operating System?",
    "answer": "System software that manages computer hardware and software."
  }
]

Notes:
${content}
`;

        // Ask Gemini
        const response = await askGemini(prompt);

        console.log("Gemini Response:");
        console.log(response);

        // Remove markdown formatting if Gemini returns ```json ... ```
        const cleanedResponse = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        let flashcards;

        try {
            flashcards = JSON.parse(cleanedResponse);
        } catch (err) {
            return res.status(500).json({
                message: "Gemini returned invalid JSON.",
                response: cleanedResponse,
            });
        }

        // Save flashcards into MongoDB
        const savedFlashcards = [];

        for (const card of flashcards) {
            const newCard = await Flashcard.create({
                userId: req.user.id,
                noteId,
                question: card.question,
                answer: card.answer,
            });

            savedFlashcards.push(newCard);
        }

        res.status(201).json({
            message: "Flashcards generated successfully",
            flashcards: savedFlashcards,
        });
    } catch (error) {
        console.error(error);

        res.status(error.status || 500).json({
            message: error.message || "Failed to generate flashcards",
            error: error.message,
        });
    }
};

module.exports = {
    generateFlashcards,
    getFlashcardsByNote,
    getFlashcardStats,
};
