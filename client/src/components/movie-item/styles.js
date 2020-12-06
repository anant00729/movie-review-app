import styled from "styled-components";

export const MovieImage = styled.img`
  margin-top: 16px;
  width: 190px;
  height: 295px;
  border-radius: 4px;
  object-fit: cover;
`;

export const MovieItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 1s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MovieLabel = styled.label`
  margin: 12px 0;
  color: #fff;
  text-align: center;
`;
