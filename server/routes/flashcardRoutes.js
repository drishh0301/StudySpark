const express = require("express");
const router = express.Router();

const {
    generateFlashcards,
    getFlashcardsByNote,
    getFlashcardStats,
} = require("../controllers/flashcardController");
const authMiddleware = require("../middleware/authMiddleware");

// Generate flashcards using Gemini
router.post("/generate", authMiddleware, generateFlashcards);

// Total flashcard count for the logged-in user (for Profile page stats)
router.get("/", authMiddleware, getFlashcardStats);

// Fetch existing flashcards for a note (so we don't regenerate every visit)
router.get("/:noteId", authMiddleware, getFlashcardsByNote);

module.exports = router;
