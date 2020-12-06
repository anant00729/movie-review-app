import React from "react";
import { MovieImage, MovieTitle, MovieDetailsWrapper } from "./styles";

export default function MovieDetails({ movieName, poster }) {
  return (
    <MovieDetailsWrapper>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster}`}
        alt="img-movie-details"
      />
      <MovieTitle>{movieName}</MovieTitle>
    </MovieDetailsWrapper>
  );
}
