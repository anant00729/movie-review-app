const db = require("../../config/database");

exports.checkMovieExists = async (tmdb_movie_id) => {
  let q1 = `SELECT id, tmdb_movie_id FROM public.movie WHERE tmdb_movie_id = (:tmdb_movie_id);`;
  try {
    let res_d = await db.query(q1, {
      replacements: { tmdb_movie_id },
    });

    const table_res = res_d[0];
    console.log("table_res :>> ", table_res);

    if (table_res.length === 0) {
      return {
        status: true,
        message: "Yes you can insert a new entry in movie table",
      };
    } else {
      return {
        status: false,
        message: "",
        movie_id: table_res[0].id,
      };
    }
  } catch (error) {
    return { status: false, message: error.message };
  }
};

exports.insertTMDBMovieId = async (tmdb_movie_id) => {
  let q1 = `INSERT INTO public.movie(tmdb_movie_id) VALUES ((:tmdb_movie_id)) RETURNING id;`;
  try {
    let res_d = await db.query(q1, {
      replacements: { tmdb_movie_id },
    });

    const table_res = res_d[0];
    console.log("table_res :>> ", table_res);

    if (table_res[0].id) {
      return {
        status: true,
        message: "value Interted",
        movie_id: table_res[0].id,
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
