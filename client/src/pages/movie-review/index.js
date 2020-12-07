import React, { useEffect, useState } from "react";
import MovieDetails from "../../components/movie-details";
import AddReview from "../../components/add-review";

import { MovieReviewContainer, MovieReviewLayoutGrid } from "./styles";
import ShowReviews from "../../components/show-reviews";

function MovieReview({ match: { params } }) {
  const [movieName, setMovieName] = useState("");
  const [poster, setPoster] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/v1/movie/getMovieByTMDBMovieID", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tmdb_movie_id: params?.id }),
    })
      .then((res) => res.json())
      .then((res_d) => {
        if (res_d?.original_title) {
          setMovieName(res_d?.original_title);
          setPoster(res_d?.poster_path);
        }
      })
      .catch((error) => {
        console.log("error.message :>> ", error?.message);
      });
  }, []);

  return (
    <MovieReviewContainer>
      <MovieReviewLayoutGrid>
        <div>
          {movieName.length > 0 ? (
            <MovieDetails movieName={movieName} poster={poster} />
          ) : (
            <h2 style={{ color: "#fff" }}>Getting Movie info...</h2>
          )}
        </div>
        <div>
          <AddReview movieId={params?.id} />
          <ShowReviews movieId={params?.id} />
        </div>
      </MovieReviewLayoutGrid>
    </MovieReviewContainer>
  );
}

export default MovieReview;
