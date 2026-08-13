const Note = require("../models/Note");

async function createNote(req, res) {
    try {
        const { title, content } = req.body;

        const newNote = await Note.create({
            title,
            content,
            userId: req.user.id,
        });

        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong creating the note",
        });
    }
}

async function getAllNotes(req, res) {
    try {
        const notes = await Note.find({ userId: req.user.id }).sort({
            createdAt: -1,
        });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong fetching notes",
        });
    }
}

async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong fetching the note",
        });
    }
}

async function deleteNote(req, res) {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Note deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong deleting the note",
        });
    }
}

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    deleteNote,
};
