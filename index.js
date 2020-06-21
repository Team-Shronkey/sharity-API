const express = require("express");
const mongoose = require("mongoose");
const logger = require("./logger");
const app = express();
const { Campaign } = require("./models/campaign");
const campaigns = require("./routes/campaigns");
mongoose
  .connect("mongodb://localhost/sharity")
  .then(() => logger.info("Connected to MongoDB"))
  .catch((err) => logger.error("Could not connect to MongoDB: ", err));

app.use((req, res, next) => {
  logger.info(`[${req.method}]: ${req.url}`);
  next();
});
app.use("/api/campaigns", campaigns);
function updateCampaign() {
  const campaign = new Campaign({
    name: "Dog Toys for ShelterDogs@SG",
    img_url:
      "https://i2.wp.com/thesmartlocal.com/wp-content/uploads/2019/04/images_easyblog_articles_7702_b2ap3_large_Causes-for-animals-doggies.png?resize=755%2C755&ssl=1",
    expiryTimestamp: "1593648000",
    organization: "ShelterDogs@SG",
    cause: "animals",
    itemType: "others",
    targetAmount: 200,
    currentAmount: 180,
    location: ["Simei"],
  });
  campaign.save();
  console.log(`Campaign ${campaign.name} has been saved successfully`);
}

updateCampaign();
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
