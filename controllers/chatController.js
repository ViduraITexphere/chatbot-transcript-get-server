const Transcript = require("../models/ChatTranscript");

exports.getTranscriptByObjectId = async (req, res) => {
  try {
    const { objectId } = req.query;

    // Find all transcripts in MongoDB where userId matches objectId
    const transcripts = await Transcript.find({ userId: objectId });

    if (transcripts.length === 0) {
      return res.status(404).json({ error: "Transcripts not found" });
    }

    // Log the retrieved transcripts to inspect timestamps
    console.log("Retrieved transcripts:", JSON.stringify(transcripts, null, 2));

    res.status(200).json({ transcripts });
  } catch (error) {
    console.error("Error fetching transcripts:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching transcripts" });
  }
};
