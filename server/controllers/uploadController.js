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

        // PDF is now stored in memory by Multer
        const dataBuffer = req.file.buffer;

        // Extract text from PDF
        const pdfData = await pdfParse(dataBuffer);
        const extractedText = pdfData.text.trim();

        if (!extractedText) {
            return res.status(400).json({
                message:
                    "Couldn't find any text in this PDF. It may be a scanned or image-only document — try a PDF with selectable text instead.",
            });
        }

        // Save extracted text as a Note
        const note = await Note.create({
            title: req.file.originalname,
            content: extractedText,
            userId: req.user.id,
        });

        res.status(201).json({
            message: "PDF uploaded successfully",
            note,
        });
    } catch (error) {
        console.error("PDF upload error:", error);

        res.status(500).json({
            message: "Failed to upload PDF",
            error: error.message,
        });
    }
};

module.exports = {
    uploadPDF,
};
