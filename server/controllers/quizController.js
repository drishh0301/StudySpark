const Quiz = require("../models/Quiz");
const { askGemini } = require("../services/geminiService");

const generateQuiz = async (req, res) => {
  try {
    const { noteId, content } = req.body;

    if (!content) {
      return res.status(400).json({
        message: "Note content is required",
      });
    }

    const prompt = `
You are an AI study assistant.

Generate exactly 5 multiple-choice questions from the notes below.

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

    const quizzes = JSON.parse(response);

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

    res.status(500).json({
      message: "Failed to generate quiz",
    });
  }
};

module.exports = {
  generateQuiz,
};