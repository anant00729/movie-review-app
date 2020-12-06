import React from "react";
import { Title, Wrapper } from "./styles";
import ReviewItem from "../review-item";

function ShowReviews() {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }

  return (
    <Wrapper>
      <Title>Movie Reviews</Title>
      {arr.map((data, index) => {
        return <ReviewItem />;
      })}
    </Wrapper>
  );
}

export default ShowReviews;
