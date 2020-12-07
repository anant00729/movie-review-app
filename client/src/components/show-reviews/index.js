import React, { useEffect, useState, useContext } from "react";
import { Title, Wrapper } from "./styles";
import ReviewItem from "../review-item";
import axios from "axios";
import EmptyBox from "../../images/box.svg";
import { GlobalContext } from "../../global/GlobalContext";

function ShowReviews({ movieId }) {
  const { all_reviews, storeAllReviews } = useContext(GlobalContext);

  useEffect(() => {
    axios({
      method: "POST",
      url: "/v1/review/getAllReviewsByMovieId",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        tmdb_movie_id: movieId,
      },
    })
      .then((res) => {
        if (res?.data?.all_reviews.length > 0) {
          storeAllReviews(res?.data?.all_reviews);
        }
      })
      .catch((error) => {
        console.log("error.message :>> ", error?.message);
      });
  }, []);

  const renderNoReviews = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={EmptyBox}
          alt="EmptyBox"
          style={{ width: "80px", height: "80px" }}
        />
        <h4 style={{ color: "#fff", marginTop: "8px" }}>
          Be the first one to review this movie!
        </h4>
      </div>
    );
  };

  return (
    <Wrapper>
      <Title>Movie Reviews</Title>

      {!all_reviews?.length
        ? renderNoReviews()
        : all_reviews.map((review, index) => {
            return <ReviewItem key={index} reviewData={review} />;
          })}
    </Wrapper>
  );
}

export default ShowReviews;
