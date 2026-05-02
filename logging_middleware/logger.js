const axios = require("axios");

const log_api = "http://20.207.122.201/evaluation-service/logs";

async function Log(stack, level, pkg, message) {
  const payload = {
    stack,
    level,
    package: pkg,
    message: `[${new Date().toISOString()}] ${message}`
  };

  try {
    await axios.post(log_api, payload);
  } catch (error) {
    const status = error.response?.status;

    console.error(`Logging Failed due to ${status || error.message} error`);

    console.log(
      `[local_log] ${stack.toUpperCase()} | ${level.toUpperCase()} | ${pkg} | ${message}`
    );
  }
}

module.exports = Log;
