const express = require("express");
const router = express.Router();

const { uploadPDF } = require("../controllers/uploadController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post("/", authMiddleware, upload.single("pdf"), uploadPDF);

module.exports = router;
