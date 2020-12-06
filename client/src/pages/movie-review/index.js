import React from "react";
import MovieDetails from "../../components/movie-details";
import AddReview from "../../components/add-review";

import { MovieReviewContainer, MovieReviewLayoutGrid } from "./styles";
import ShowReviews from "../../components/show-reviews";

function index() {
  return (
    <MovieReviewContainer>
      <MovieReviewLayoutGrid>
        <div>
          <MovieDetails />
        </div>
        <div>
          <AddReview />
          <ShowReviews />
        </div>
      </MovieReviewLayoutGrid>
    </MovieReviewContainer>
  );
}

export default index;
