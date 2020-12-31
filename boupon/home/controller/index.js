const homeData = require("../dataSource/homeData.json");
exports.getHomeData = async (req, res) => {
  res.json(homeData);
};
