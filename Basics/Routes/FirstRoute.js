const express = require("express");
const FirstController = require("../Controller/FirstController");
const route = express.Router();
route.get("/get-data",FirstController.TestingAPI);
module.exports = route;