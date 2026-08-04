const express = require("express");
const router = express.Router();

const { generateFlashcards } = require("../controllers/flashcardController");
const authMiddleware = require("../middleware/authMiddleware");

// Generate flashcards using Gemini
router.post("/generate", authMiddleware, generateFlashcards);

module.exports = router;