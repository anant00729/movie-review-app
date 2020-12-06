import React from "react";
import { MovieImage, MovieItemWrapper, MovieLabel } from "./styles";

export default function MovieItem(props) {
  return (
    <MovieItemWrapper>
      <MovieImage
        src="https://image.tmdb.org/t/p/w220_and_h330_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg"
        alt="img"
      />
      <MovieLabel>The Mandalorian</MovieLabel>
    </MovieItemWrapper>
  );
}
