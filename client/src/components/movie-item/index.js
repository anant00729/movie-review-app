import React, { useContext } from "react";
import { MovieImage, MovieItemWrapper, MovieLabel } from "./styles";
import { withRouter } from "react-router-dom";
import { MOVIE_REVIEW_ROUTE } from "../../utils/constants";
import { GlobalContext } from "../../global/GlobalContext";

function MovieItem({ movie: { poster_path, original_title, id }, history }) {
  const { clearAllReviews } = useContext(GlobalContext);

  const handleMovieClick = () => {
    clearAllReviews();
    history.push(`${MOVIE_REVIEW_ROUTE}/${id}`);
  };

  return (
    <MovieItemWrapper onClick={handleMovieClick}>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
        alt="img"
      />
      <MovieLabel>{original_title}</MovieLabel>
    </MovieItemWrapper>
  );
}

export default withRouter(MovieItem);
