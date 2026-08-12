const express = require("express");
const router = express.Router();

const {
    generateQuiz,
    getQuizByNote,
    getQuizStats,
} = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/generate", authMiddleware, generateQuiz);
router.get("/", authMiddleware, getQuizStats);
router.get("/:noteId", authMiddleware, getQuizByNote);

module.exports = router;
