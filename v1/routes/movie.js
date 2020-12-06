const express = require("express");
const { getMovieList, getMovieByTMDBMovieID } = require("../controllers/movie");
let _r = express.Router();

// define the home page route
_r.post("/getMovieList", getMovieList);
_r.post("/getMovieByTMDBMovieID", getMovieByTMDBMovieID);

module.exports = _r;
