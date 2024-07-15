const mongoose = require("mongoose");

const transcriptSchema = new mongoose.Schema({
  userId: String,
  transcripts: [
    {
      transcript: [
        {
          sender: String,
          message: String,
          _id: mongoose.Schema.Types.ObjectId,
          timestamp: { type: Date, default: Date.now },
        },
      ],
      _id: mongoose.Schema.Types.ObjectId,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  timestamp: { type: Date, default: Date.now },
});

const Transcript = mongoose.model("Transcript", transcriptSchema);

module.exports = Transcript;
