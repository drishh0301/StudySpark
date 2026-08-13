const Quiz = require("../models/Quiz");
const { askGemini } = require("../services/geminiService");

const getQuizStats = async (req, res) => {
    try {
        const noteIds = await Quiz.distinct("noteId", { userId: req.user.id });
        res.status(200).json({ count: noteIds.length });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch quiz stats",
            error: error.message,
        });
    }
};

const getQuizByNote = async (req, res) => {
    try {
        const { noteId } = req.params;

        const quiz = await Quiz.find({
            noteId,
            userId: req.user.id,
        }).sort({ createdAt: 1 });

        res.status(200).json({ quiz });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch quiz",
            error: error.message,
        });
    }
};

const generateQuiz = async (req, res) => {
    try {
        const { noteId, content } = req.body;

        if (!content || !content.trim()) {
            return res.status(400).json({
                message: "Note content is required",
            });
        }

        const wordCount = content.trim().split(/\s+/).length;
        const questionCount = Math.min(
            10,
            Math.max(5, Math.ceil(wordCount / 150)),
        );

        const prompt = `
You are an AI study assistant.

Generate exactly ${questionCount} multiple-choice questions from the notes below.

Return ONLY valid JSON in this format:

[
    {
    "question": "...",
    "options": [
        "...",
        "...",
        "...",
        "..."
    ],
    "correctAnswer": "..."
    }
]

Notes:
${content}
`;

        const response = await askGemini(prompt);

        const cleanedResponse = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        let quizzes;

        try {
            quizzes = JSON.parse(cleanedResponse);
        } catch (err) {
            return res.status(500).json({
                message: "Gemini returned invalid JSON.",
                response: cleanedResponse,
            });
        }

        const savedQuiz = [];

        for (const quiz of quizzes) {
            const newQuiz = await Quiz.create({
                userId: req.user.id,
                noteId,
                question: quiz.question,
                options: quiz.options,
                correctAnswer: quiz.correctAnswer,
            });

            savedQuiz.push(newQuiz);
        }

        res.status(201).json({
            message: "Quiz generated successfully",
            quiz: savedQuiz,
        });
    } catch (error) {
        console.error(error);

        res.status(error.status || 500).json({
            message: error.message || "Failed to generate quiz",
            error: error.message,
        });
    }
};

module.exports = {
    generateQuiz,
    getQuizByNote,
    getQuizStats,
};
