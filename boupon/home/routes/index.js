const express = require("express");
const { getHomeData, getFreeDeals, getAllRecipes } = require("../controller");
let _r = express.Router();

// define the home page route
_r.post("/getHomeData", getHomeData);
_r.post("/freedeals", getFreeDeals);
_r.get("/getAllRecipes", getAllRecipes);

module.exports = _r;
