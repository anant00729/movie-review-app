const express = require("express");
const db = require("../../config/database");
const { createReview } = require("../controllers/review");
let router = express.Router();

// define the home page route
router.post("/createReview", createReview);

module.exports = router;
