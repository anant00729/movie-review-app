const { insertUser, checkUserExists } = require("../models/User");

exports.login = (req, res) => {
  const email = req.body.email || "";
  const password = req.body.password || "";
  res.json({
    email,
    password,
  });
};

exports.register = async (req, res) => {
  const email = req.body.email || "";
  const password = req.body.password || "";
  const username = req.body.username || "";

  const checkUserRes = await checkUserExists(email);

  if (checkUserRes.status) {
    const insertUserRes = await insertUser(email, password, username);
    res.json(insertUserRes);
  } else {
    res.json(checkUserRes);
  }
};
