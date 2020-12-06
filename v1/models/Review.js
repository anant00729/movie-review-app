const db = require("../../config/database");

exports.insertReview = async (movie_id, user_id, review_message) => {
  let q1 = `INSERT INTO public.review(
    review_message, 
    user_id, 
    movie_id
    ) VALUES (
      (:review_message), 
      (:user_id), 
      (:movie_id)) RETURNING id, review_message, user_id, movie_id`;
  try {
    let res_d = await db.query(q1, {
      replacements: { movie_id, user_id, review_message },
    });

    const table_res = res_d[0];
    if (table_res[0].id) {
      return {
        status: true,
        message: "value Interted",
        data: table_res[0],
      };
    } else {
      return {
        status: false,
        message: `Something went wrong while inserting tmdbid`,
      };
    }
  } catch (error) {
    return { status: false, message: error.message };
  }
};

exports.getAllReviews = async (movie_id) => {
  let q1 = `SELECT id, review_message, user_id, movie_id FROM public.review WHERE movie_id = (:movie_id) ORDER BY id DESC;`;
  try {
    let res_d = await db.query(q1, {
      replacements: { movie_id: movie_id },
    });

    const table_res = res_d[0];

    if (table_res.length > 0) {
      return { status: true, all_reviews: table_res };
    } else {
      return {
        status: false,
        message: "No Reviews found for this movie",
      };
    }
  } catch (error) {
    return { status: false, message: error.message };
  }
};
