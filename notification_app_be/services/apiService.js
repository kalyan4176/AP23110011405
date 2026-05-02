const axios = require("axios");
const { DEPOT_API, VEHICLE_API, AUTH_TOKEN } = require("../config/config");
const { Log } = require("../../logging_middleware");

const axiosInstance = axios.create({
  timeout: 5000,
  headers: AUTH_TOKEN
    ? { Authorization: `Bearer ${AUTH_TOKEN}` }
    : {}
});


async function fetchDepots() {
  try {
    const res = await axiosInstance.get(DEPOT_API);

    await Log("backend", "info", "service", "Fetched depots from API");


    return res.data.depots;

  } catch (err) {
    await Log("backend", "error", "service", "Depot API failed");


    return [
      { ID: 1, MechanicHours: 60 },
      { ID: 2, MechanicHours: 135 },
      { ID: 3, MechanicHours: 188 }
    ];
  }
}

async function fetchVehicles() {
  try {
    const res = await axiosInstance.get(VEHICLE_API);

    await Log("backend", "info", "service", "Fetched vehicles from API");
    
    return res.data.vehicles;

  } catch (err) {
    await Log("backend", "error", "service", "Vehicle API failed");

    return [
      { TaskID: "1", Duration: 1, Impact: 5 },
      { TaskID: "2", Duration: 6, Impact: 2 },
      { TaskID: "3", Duration: 1, Impact: 3 },
      { TaskID: "4", Duration: 5, Impact: 5 },
      { TaskID: "5", Duration: 7, Impact: 3 },
      { TaskID: "6", Duration: 6, Impact: 3 },
      { TaskID: "7", Duration: 5, Impact: 1 },
      { TaskID: "8", Duration: 5, Impact: 9 },
      { TaskID: "9", Duration: 6, Impact: 10 }
    ];
  }
}

module.exports = {
  fetchDepots,
  fetchVehicles
};