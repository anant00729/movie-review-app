import React from "react";
import { MovieImage, MovieItemWrapper, MovieLabel } from "./styles";
import { Link } from "react-router-dom";
import { MOVIE_REVIEW_ROUTE } from "../../utils/constants";

export default function MovieItem({
  movie: { poster_path, original_title, id },
}) {
  return (
    <Link to={`${MOVIE_REVIEW_ROUTE}/${id}`}>
      <MovieItemWrapper>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
          alt="img"
        />
        <MovieLabel>{original_title}</MovieLabel>
      </MovieItemWrapper>
    </Link>
  );
}
