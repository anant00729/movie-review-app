const db = require("../../config/database");

exports.checkUserExists = async (email) => {
  let q1 = `SELECT * FROM public.movie_user WHERE email = (:email);`;
  try {
    let res_d = await db.query(q1, {
      replacements: { email },
    });
    const table_res = res_d[0];
    if (table_res.length === 0) {
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
    ) RETURNING email, username, id;
  `;
  try {
    let res_d = await db.query(q1, {
      replacements: { email, password, username },
    });
    const table_res = res_d[1];
    if (table_res === 1) {
      return {
        status: true,
        message: "User registed successfully",
        user: res_d[0][0],
      };
    } else {
      return { status: false, message: "Something went wrong" };
    }
  } catch (error) {
    return { status: false, message: error.message };
  }
};

exports.checkUserExistsForLogin = async (email) => {
  let q1 = `SELECT * FROM public.movie_user WHERE email = (:email);`;
  try {
    let res_d = await db.query(q1, {
      replacements: { email },
    });
    const table_res = res_d[0];
    if (table_res.length > 0) {
      return {
        status: true,
        message: "",
        user: table_res[0],
      };
    } else {
      return {
        status: false,
        message: `User needs to register`,
      };
    }
  } catch (error) {
    return { status: false, message: error.message };
  }
};
