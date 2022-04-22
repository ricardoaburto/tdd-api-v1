const http = require("http");
const app = require("../app");
const mongoose = require("mongoose");

const server = http.createServer(app);

mongoose.connect("mongodb://localhost:27017/products", function (err, res) {
  if (err) {
    console.log("ERROR: connecting to Database. " + err);
  }
  server.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
  });
});
