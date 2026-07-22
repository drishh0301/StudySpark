const express = require("express");
const router = express.Router();

const {
  createNote,
  getAllNotes,
  getNoteById,
  deleteNote,
} = require("../controllers/noteController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createNote);
router.get("/", authMiddleware, getAllNotes);
router.get("/:id", authMiddleware, getNoteById);
router.delete("/:id", authMiddleware, deleteNote);

module.exports = router;
