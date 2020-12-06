const express = require("express");
const { getMovieList } = require("../controllers/movie");
let _r = express.Router();

// define the home page route
_r.post("/getMovieList", getMovieList);

module.exports = _r;
