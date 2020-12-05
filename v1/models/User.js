const db = require("../../config/database");

exports.checkUserExists = async (email) => {
  let q1 = `SELECT * FROM public.movie_user WHERE email = (:email);`;
  try {
    let res_d = await db.query(q1, {
      replacements: { email },
    });

    console.log("res_d[0] :>> ");
    if (res_d[0].length === 0) {
      return {
        status: true,
        message: "User can register",
      };
    } else {
      return {
        status: false,
        message: `User alredy exists with emailID : ${email}`,
      };
    }
  } catch (error) {
    return { status: false, message: error.message };
  }
};
exports.insertUser = async (email, password, username) => {
  let q1 = `INSERT INTO public.movie_user(email, password, username)
    VALUES (
      (:email), 
      (:password),
      (:username)
    );
  `;
  try {
    let res_d = await db.query(q1, {
      replacements: { email, password, username },
    });
    if (res_d[1] === 1) {
      return {
        status: true,
        message: "User registed successfully",
      };
    } else {
      return { status: false, message: "Something went wrong" };
    }
  } catch (error) {
    return { status: false, message: error.message };
  }
};
