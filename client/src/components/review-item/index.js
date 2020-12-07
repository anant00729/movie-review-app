import React from "react";
import {
  ProfilePic,
  ReviewCommentWrapper,
  CommentWrapper,
  UsernameLabel,
  CommentLabel,
} from "./styles";

function ReviewItem({ reviewData: { username, review_message } }) {
  return (
    <ReviewCommentWrapper>
      <ProfilePic
        src={`https://avatar.oxro.io/avatar.svg?name=${username}&length=2`}
      />
      <CommentWrapper>
        <UsernameLabel>{username}</UsernameLabel>
        <CommentLabel>{review_message}</CommentLabel>
      </CommentWrapper>
    </ReviewCommentWrapper>
  );
}

export default ReviewItem;
