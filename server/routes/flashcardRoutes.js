const express = require("express");
const router = express.Router();

const {
    generateFlashcards,
    getFlashcardsByNote,
    getFlashcardStats,
} = require("../controllers/flashcardController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/generate", authMiddleware, generateFlashcards);

router.get("/", authMiddleware, getFlashcardStats);

router.get("/:noteId", authMiddleware, getFlashcardsByNote);

module.exports = router;
