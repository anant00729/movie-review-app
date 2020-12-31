const homeData = require("../dataSource/homeData.json");
const freeDeals = require("../dataSource/freeDeals.json");

exports.getHomeData = async (req, res) => {
  res.json(homeData);
};

exports.getFreeDeals = async (req, res) => {
  let items = [];
  const categories = [
    "foodsandcafe",
    "lifestyle",
    "beautyandsaloon",
    "electronics",
    "outdoorandsports",
  ];
  let singleItem = freeDeals.items[0];
  for (let i = 0; i < 5; i++) {
    let duplicate = {
      ...singleItem,
      category: categories[i % categories.length],
    };
    items.push(duplicate);
  }
  freeDeals.items = items;
  res.json(freeDeals);
};
