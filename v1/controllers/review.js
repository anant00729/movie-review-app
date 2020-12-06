const { insertTMDBMovieId, checkMovieExists } = require("../models/Movie");
const { insertReview, getAllReviews } = require("../models/Review");

exports.createReview = async (req, res) => {
  const review_message = req.body.review_message || ""; // ""
  const tmdb_movie_id = req.body.tmdb_movie_id || -1; // 1577922
  const user_id = req.body.user_id || -1; // 6

  // Check movie tmdb id exists
  // Insert tmdb id into movie table
  // after insterting tmdb id table row will have a new id for the primary key
  // next intert review_message, movie_id , user_id

  const checkMovieExistsRes = await checkMovieExists(tmdb_movie_id);

  let movie_id_retrieved = -1;

  if (checkMovieExistsRes.status) {
    const insertTMDBMovieIdRes = await insertTMDBMovieId(tmdb_movie_id);
    if (!insertTMDBMovieIdRes.status) {
      res.json(insertTMDBMovieIdRes);
    }
    movie_id_retrieved = insertTMDBMovieIdRes.movie_id;
  } else {
    movie_id_retrieved = checkMovieExistsRes.movie_id;
  }

  const insertReviewRes = await insertReview(
    movie_id_retrieved,
    user_id,
    review_message
  );
  res.json(insertReviewRes);
};

exports.getAllReviewsByMovieId = async (req, res) => {
  const tmdb_movie_id = req.body.tmdb_movie_id || -1; // 1577922

  const checkMovieExistsRes = await checkMovieExists(tmdb_movie_id);

  if (checkMovieExistsRes.status) {
    res.json({
      status: false,
      message: "No Reviews found for this movie",
    });
  }

  const getAllReviewsRes = await getAllReviews(checkMovieExistsRes.movie_id);
  res.json(getAllReviewsRes);
};
