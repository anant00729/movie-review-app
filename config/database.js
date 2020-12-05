const Sequelize = require("sequelize");
const config = require("config");
const dbURI = config.get("dbURI");
const db = new Sequelize(dbURI);
module.exports = db;
