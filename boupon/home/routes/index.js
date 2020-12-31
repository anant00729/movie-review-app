const express = require("express");
const { getHomeData, getFreeDeals } = require("../controller");
let _r = express.Router();

// define the home page route
_r.post("/getHomeData", getHomeData);
_r.post("/freedeals", getFreeDeals);

module.exports = _r;
