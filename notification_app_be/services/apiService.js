
const axios = require("axios");
const { DEPOT_API, VEHICLE_API } = require("../config/config");
const { Log } = require("../../logging_middleware");

async function fetchDepots() {
  try {
    const res = await axios.get(DEPOT_API);
    await Log("backend", "info", "service", "Fetched depots");
    return res.data.depots;

  } catch (err) {
    await Log("backend", "error", "service", "Failed to fetch depots");

    return [
      { ID: 1, MechanicHours: 5 },
      { ID: 2, MechanicHours: 8 }
    ];
  }
}

async function fetchVehicles() {
  try {
    const res = await axios.get(VEHICLE_API);
    await Log("backend", "info", "service", "Fetched vehicles");
    return res.data.vehicles;

  } catch (err) {
    await Log("backend", "error", "service", "Failed to fetch vehicles");

    return [
      { TaskID: 1, Duration: 2, Impact: 50 },
      { TaskID: 2, Duration: 3, Impact: 60 },
      { TaskID: 3, Duration: 4, Impact: 70 }
    ];
  }
}

module.exports = {
  fetchDepots,
  fetchVehicles
};
