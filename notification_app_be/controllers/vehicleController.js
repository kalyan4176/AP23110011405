const { fetchDepots, fetchVehicles } = require("../services/apiService");
const knapsack = require("../services/knapsackService");
const { Log } = require("../../logging_middleware");

async function optimizeSchedule(req, res) {
  try {
    await Log("backend", "info", "controller", "Optimization started");

    const depots = await fetchDepots();
    const vehicles = await fetchVehicles();

    const results = [];

    for (let depot of depots) {
      const { totalImpact, selectedTasks } = knapsack(
        vehicles,
        depot.MechanicHours
      );

      results.push({
        depotId: depot.ID,
        totalImpact,
        tasks: selectedTasks.map(t => t.TaskID)
      });
    }

    await Log("backend", "info", "controller", "Optimization completed");

    res.json(results);

  } catch (err) {
    await Log("backend", "fatal", "controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  optimizeSchedule
};