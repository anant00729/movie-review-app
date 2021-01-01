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

let isEven = true;

exports.getAllRecipes = async (req, res) => {
  let newHome = { ...homeRecipe };
  let mainList = newHome.results;
  // let mainList = [0, 1, 2, 3, 4, 5, 6];

  let results = [];
  if (isEven) {
    for (let i = 0; i < mainList.length; i++) {
      let r = {};
      if (i % 2 === 0) {
        let ranIndex = i % mainList.length;
        r = mainList[ranIndex];
        results.push(r);
      }
    }
  } else {
    for (let i = 0; i < mainList.length; i++) {
      let r = {};
      if (i % 2 === 1) {
        let ranIndex = i % mainList.length;
        r = mainList[ranIndex];
        results.push(r);
      }
    }
  }

  isEven = !isEven;
  newHome.results = results;
  res.json(newHome);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
