const express = require("express");
const { getHomeData } = require("../controller");
let _r = express.Router();

// define the home page route
_r.post("/getHomeData", getHomeData);
_r.post("/freedeals", getHomeData);

module.exports = _r;
