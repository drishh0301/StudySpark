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

        // Read uploaded PDF
        const dataBuffer = fs.readFileSync(req.file.path);

        // Extract text
        const pdfData = await pdfParse(dataBuffer);
        const extractedText = pdfData.text.trim();

        if (!extractedText) {
            fs.unlink(req.file.path, () => {});
            return res.status(400).json({
                message:
                    "Couldn't find any text in this PDF. It may be a scanned or image-only document — try a PDF with selectable text instead.",
            });
        }

        // Save as Note
        const note = await Note.create({
            title: req.file.originalname,
            content: extractedText,
            userId: req.user.id,
        });

        // Clean up the temp file now that we've extracted the text
        fs.unlink(req.file.path, (err) => {
            if (err) console.error("Failed to delete temp upload:", err);
        });

        res.status(201).json({
            message: "PDF uploaded successfully",
            note,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to upload PDF",
            error: error.message,
        });
    }
};

module.exports = {
    uploadPDF,
};
