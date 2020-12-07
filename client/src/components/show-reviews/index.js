import React, { useEffect, useState } from "react";
import { Title, Wrapper } from "./styles";
import ReviewItem from "../review-item";
import axios from "axios";
import EmptyBox from "../../images/box.svg";

function ShowReviews({ movieId }) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    axios({
      method: "POST",
      url: "/v1/review/getAllReviewsByMovieId",
      data: {
        tmdb_movie_id: movieId,
      },
    })
      .then((res) => {
        setReviewList(res?.data?.all_reviews);
      })
      .catch((error) => {
        console.log("error.message :>> ", error.message);
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

      {!reviewList?.length
        ? renderNoReviews()
        : reviewList.map((review, index) => {
            return <ReviewItem key={index} reviewData={review} />;
          })}
    </Wrapper>
  );
}

export default ShowReviews;
