const express = require("express");
const { getHomeData } = require("../controller");
let _r = express.Router();

// define the home page route
_r.post("/getHomeData", getHomeData);

module.exports = _r;
