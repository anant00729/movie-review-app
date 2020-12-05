const express = require("express");
const { login, register } = require("../controllers/user");
let _r = express.Router();

// define the home page route
_r.post("/login", login);
_r.post("/register", register);

module.exports = _r;
