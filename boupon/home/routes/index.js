const express = require("express");
const { getHomeData } = require("../controller");
let _r = express.Router();

// define the home page route
_r.get("/getHomeData", getHomeData);

module.exports = _r;
