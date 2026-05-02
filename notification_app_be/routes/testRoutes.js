const express = require("express");
const { Log } = require("../../logging_middleware");

const router = express.Router();

router.get("/", async (req, res) => {
  await Log("backend", "debug", "route", "Test route hit");
  res.send("Backend running");
});

module.exports = router;