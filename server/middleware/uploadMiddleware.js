const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    console.log("Original Name:", file.originalname);
    console.log("Mime Type:", file.mimetype);

    const extension = path.extname(file.originalname).toLowerCase();

    if (
        extension === ".pdf" ||
        file.mimetype === "application/pdf" ||
        file.mimetype === "application/x-pdf" ||
        file.mimetype === "application/octet-stream"
    ) {
        cb(null, true);
    } else {
        cb(
            new Error(`Only PDF files are allowed! Received: ${file.mimetype}`),
            false,
        );
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB
    },
});

module.exports = upload;
