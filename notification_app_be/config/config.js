require("dotenv").config();
module.exports = {
  PORT: process.env.PORT || 5000,
  DEPOT_API: "http://20.207.122.201/evaluation-service/depots",
  VEHICLE_API: "http://20.207.122.201/evaluation-service/vehicles",
  AUTH_TOKEN: process.env.AUTH_TOKEN
};