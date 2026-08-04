const express = require("express");
const router = express.Router();

const summaryController = require("../controllers/summaryController");
const authMiddleware = require("../middleware/authMiddleware");

console.log("Summary Controller:", summaryController);
console.log("Auth Middleware:", typeof authMiddleware);

router.post(
  "/generate",
  authMiddleware,
  summaryController.generateSummary
);

module.exports = router;