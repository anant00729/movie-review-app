import styled from "styled-components";

export const ReviewCommentWrapper = styled.div`
  padding: 12px;
  width: 100%;

  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
`;

export const ProfilePic = styled.img`
  margin-top: 14px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Title = styled.label`
  margin: 12px 0;
  color: #fff;
  font-size: 24px;
`;

export const UsernameLabel = styled.label`
  margin: 4px 0;
  color: #fff;
  font-size: 20px;
`;

export const CommentLabel = styled.label`
  margin: 12px 0;
  color: #fff;
  font-size: 16px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;
