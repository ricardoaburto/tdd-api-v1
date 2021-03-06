require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// Config Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

module.exports = app;
