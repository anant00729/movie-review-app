const Sequelize = require("sequelize");
const config = require("config");
const dbURI = process.env.DB_URI || config.get("dbURI");
const db = new Sequelize(dbURI);
module.exports = db;
