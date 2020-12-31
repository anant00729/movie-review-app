const homeData = require("../dataSource/homeData.json");
const freeDeals = require("../dataSource/freeDeals.json");
const homeRecipe = require("../dataSource/homeRecipe.json");

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

exports.getAllRecipes = async (req, res) => {
  let results = [];
  for (let i = 0; i < 1000; i++) {
    let r = homeRecipe.results[i % homeRecipe.results.length];
    results.push(r);
  }
  homeRecipe.results = results;
  res.json(homeRecipe);
};
