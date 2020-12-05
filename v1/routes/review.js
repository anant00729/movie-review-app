const express = require("express");
const db = require("../../config/database");
let router = express.Router();

// define the home page route
router.post("/getAllReviews", (req, res) => {
  // req ---> Cin
  // res ---> Cout
  res.json({
    hI: "hello all",
  });
});

module.exports = router;
