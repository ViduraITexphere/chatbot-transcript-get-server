const express = require("express");
const chatController = require("../controllers/chatController");

const router = express.Router();

// New route to get transcript by object ID
router.get("/transcripts/", chatController.getTranscriptByObjectId);

module.exports = router;
