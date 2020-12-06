import React from "react";
import { AddReviewContainer, AddReviewTitle } from "./styles";

import { AppTextArea, AppButton } from "../../utils/styles";

function AddReview() {
  return (
    <AddReviewContainer>
      <AddReviewTitle>Post your Review</AddReviewTitle>
      <form>
        <AppTextArea
          type="text"
          style={{ width: "100%", boxSizing: "border-box", marginTop: 0 }}
          rows="5"
        />
        <AppButton> Add Review</AppButton>
      </form>
    </AddReviewContainer>
  );
}

export default AddReview;
