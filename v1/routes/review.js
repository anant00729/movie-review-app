const express = require("express");
const db = require("../../config/database");
const {
  createReview,
  getAllReviewsByMovieId,
} = require("../controllers/review");
let router = express.Router();

// define the home page route
router.post("/createReview", createReview);
router.post("/getAllReviewsByMovieId", getAllReviewsByMovieId);

module.exports = router;
