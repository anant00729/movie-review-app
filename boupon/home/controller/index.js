const homeData = require("../dataSource/homeData.json");
const freeDeals = require("../dataSource/freeDeals.json");

exports.getHomeData = async (req, res) => {
  res.json(homeData);
};

exports.getFreeDeals = async (req, res) => {
  res.json(freeDeals);
};
