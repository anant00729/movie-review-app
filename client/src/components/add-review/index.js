import React, { useContext, useState } from "react";
import { AddReviewContainer, AddReviewTitle } from "./styles";
import { AppTextArea, AppButton } from "../../utils/styles";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";

function AddReview({ movieId }) {
  const [reviewContent, setReviewContent] = useState("");
  const { user_id, createReviewPost, setAlert } = useContext(GlobalContext);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewContent?.length) {
      setAlert("Please enter your review message.");
      return;
    }

    axios({
      method: "POST",
      url: "/v1/review/createReview",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        user_id,
        tmdb_movie_id: movieId,
        review_message: reviewContent,
      },
    })
      .then((res) => {
        if (res?.data?.status) {
          setReviewContent("");
          createReviewPost(res?.data?.data);
        }
      })
      .catch((error) => {
        setAlert(error?.message);
      });
  };

  return (
    <AddReviewContainer>
      <AddReviewTitle>Post your Review</AddReviewTitle>
      <form>
        <AppTextArea
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          type="text"
          style={{ width: "100%", boxSizing: "border-box", marginTop: 0 }}
          rows="5"
        />
        <AppButton onClick={(e) => handleSubmitReview(e)}>Add Review</AppButton>
      </form>
    </AddReviewContainer>
  );
}

export default AddReview;
