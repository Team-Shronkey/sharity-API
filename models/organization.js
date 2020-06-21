const mongoose = require("mongoose");
const { Cause } = require("./cause");
const { campaignSchema } = require("./campaign");
// async function generateCause() {
//   let causeList = await Cause.find()
//     .select("name")
//     .then((document) => {
//       return document;
//     });
//   return causeList;
// }

const organizationSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  cause: [
    {
      type: String,
      enum: ["animal", "migrant_workers"],
    },
  ],
  level: {
    type: String,
    enum: ["blank", "bronze", "silver", "gold", "platinum"],
  },
  campaigns: [{ type: campaignSchema }],
});

const Organization = mongoose.model("Organization", organizationSchema);

exports.Organization = Organization;
exports.organizationSchema = organizationSchema;
