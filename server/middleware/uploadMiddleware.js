const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname)
    );
  },
});

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
    cb(new Error(`Only PDF files are allowed! Received: ${file.mimetype}`), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;