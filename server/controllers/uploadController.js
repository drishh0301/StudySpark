const fs = require("fs");
const pdfParse = require("pdf-parse");
const Note = require("../models/Note");

const uploadPDF = async (req, res) => {
    console.log("Upload route hit");
    console.log(req.file);
    console.log(req.user);
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a PDF file.",
            });
        }
        if (!noteId) {
            return res.status(400).json({
                message: "Note ID is required",
            });
        }

        // Read uploaded PDF
        const dataBuffer = fs.readFileSync(req.file.path);

        // Extract text
        const pdfData = await pdfParse(dataBuffer);

        // Save as Note
        const note = await Note.create({
            title: req.file.originalname,
            content: pdfData.text,
            userId: req.user.id,
        });

        res.status(201).json({
            message: "PDF uploaded successfully",
            note,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to upload PDF",
        });
    }
};

module.exports = {
    uploadPDF,
};
