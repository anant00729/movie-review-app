import React from "react";
import {
  ProfilePic,
  ReviewCommentWrapper,
  CommentWrapper,
  UsernameLabel,
  CommentLabel,
} from "./styles";

function ReviewItem() {
  return (
    <ReviewCommentWrapper>
      <ProfilePic src="https://avatar.oxro.io/avatar.svg?name=Ar&length=2" />
      <CommentWrapper>
        <UsernameLabel>{"Hello all"}</UsernameLabel>
        <CommentLabel>{"Hello all"}</CommentLabel>
      </CommentWrapper>
    </ReviewCommentWrapper>
  );
}

export default ReviewItem;
