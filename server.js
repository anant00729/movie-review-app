const express = require("express");
var bodyParser = require("body-parser");
const db = require("./config/database");
const userRouter = require("./v1/routes/user");
const reviewRouter = require("./v1/routes/review");
const movieRouter = require("./v1/routes/movie");

const app = express();

// Authenticate DB
const auth = async () => {
  try {
    await db.authenticate();
    console.log(
      "^^%&%^&^%^$%^&$%%^$%^$^ Wolla Connected to DB ^^%&%^&^%^$%^&$%%^$%^$^"
    );
  } catch (error) {
    console.log(`DB Connection failed ${err.message}`);
  }
};

auth();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1/auth", userRouter);
app.use("/v1/review", reviewRouter);
app.use("/v1/movie", movieRouter);

app.get("/test", (req, res) => {
  res.json({
    hello: "Hello anan",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
