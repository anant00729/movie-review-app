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
  for (let i = 0; i < 10; i++) {
    let ranIndex = getRandomInt(homeRecipe.results.length - 1);
    let r = homeRecipe.results[ranIndex];
    results.push(r);
  }
  homeRecipe.results = results;
  res.json(homeRecipe);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
