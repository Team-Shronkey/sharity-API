const mongoose = require("mongoose");

const causeSchema = new mongoose.Schema({
  name: String,
  img_url: String,
});

const Cause = mongoose.model("Cause", causeSchema);

exports.Cause = Cause;
exports.causeSchema = causeSchema;
