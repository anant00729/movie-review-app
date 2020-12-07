const {
  insertUser,
  checkUserExists,
  checkUserExistsForLogin,
} = require("../models/User");
const bcrypt = require("bcryptjs");
const SECRET_KEY = process.env.JWT_S || require("config").get("jwtSecret");
const jwt = require("jsonwebtoken");

const generateToken = async (res) => {
  try {
    const token = await jwt.sign(
      {
        id: res.id,
        email: res.email,
        username: res.username,
      },
      SECRET_KEY,
      { expiresIn: "100hr" }
    );
    return { status: true, message: "", token };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

exports.login = async (req, res) => {
  const email = req.body.email || "";
  const password = req.body.password || "";

  const checkUserRes = await checkUserExistsForLogin(email);

  if (checkUserRes.status) {
    const match = await bcrypt.compare(password, checkUserRes.user.password);
    if (!match) {
      res.json({ status: false, message: "Password doesnt match" });
    }
    delete checkUserRes.user.password;
    const generateTokenRes = await generateToken(checkUserRes.user);
    if (generateTokenRes.status) {
      checkUserRes.token = generateTokenRes.token;
      res.json(checkUserRes);
    } else {
      res.json(generateTokenRes);
    }
  } else {
    res.json(checkUserRes);
  }
};

exports.register = async (req, res) => {
  const email = req.body.email || "";
  let password = req.body.password || "";
  const username = req.body.username || "";

  const checkUserRes = await checkUserExists(email);

  if (checkUserRes.status) {
    password = await bcrypt.hash(password, 12);
    const insertUserRes = await insertUser(email, password, username);
    const generateTokenRes = await generateToken(insertUserRes.user);
    if (generateTokenRes.status) {
      insertUserRes.token = generateTokenRes.token;
    }
    res.json(insertUserRes);
  } else {
    res.json(checkUserRes);
  }
};
