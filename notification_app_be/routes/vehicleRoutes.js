const express = require("express");
const { optimizeSchedule } = require("../controllers/vehicleController");

const router = express.Router();

router.get("/optimize", optimizeSchedule);

module.exports = router;