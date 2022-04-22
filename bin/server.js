const http = require("http");
const app = require("../app");
const mongoose = require("mongoose");

const db = require("../db/db.config");

const server = http.createServer(app);
const PORT = process.env.NODE_DOCKER_PORT || 8080;

mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

server.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}.`);
});
