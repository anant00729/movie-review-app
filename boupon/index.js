const home = require("./home/routes");

exports.connectBouponRoutes = (app) => {
  app.use("/boupon/v1/home", home);
};
