const app = require("./app");
const { PORT } = require("./config/config");
const { Log } = require("../logging_middleware");

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await Log("backend", "info", "service", `Server started on ${PORT}`);
});

