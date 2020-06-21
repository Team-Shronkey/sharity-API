const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  organization: String,
  cause: [
    {
      type: String,
      enum: [
        "animals",
        "arts",
        "youth",
        "disability",
        "elderly",
        "environment",
        "healthcare",
        "humanitarian",
      ],
    },
  ],
  itemType: {
    type: String,
    enum: [
      "finance",
      "clothes",
      "volunteers",
      "skills",
      "books",
      "food",
      "others",
    ],
  },
  targetAmount: { type: Number, min: 0 },
  currentAmount: { type: Number, min: 0 },
  expiryTimestamp: { type: Date },
  location: [{ type: String }],
});

const Campaign = mongoose.model("Campaign", campaignSchema);

exports.Campaign = Campaign;
exports.campaignSchema = campaignSchema;
