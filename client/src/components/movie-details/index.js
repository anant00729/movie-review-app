import React from "react";
import { MovieImage, MovieTitle, MovieDetailsWrapper } from "./styles";

export default function MovieDetails() {
  return (
    <MovieDetailsWrapper>
      <MovieImage
        src="https://image.tmdb.org/t/p/w220_and_h330_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg"
        alt="img-movie-details"
      />
      <MovieTitle>
        Some Movie Name Some Movie NameSome Movie NameSome Movie NameSome Movie
        NameSome Movie Name
      </MovieTitle>
    </MovieDetailsWrapper>
  );
}
