const express = require("express");
const logger = require("logger");
const router = require("Router");
const mongoose = require("mongoose");
const { Campaign } = require("./models/campaign");

router.get("/", async (req, res) => {
  const campaigns = await Campaign.find({
    expiryTimestamp: { $gt: Date.now() },
  });
  res.status(200).send(campaigns);
});
