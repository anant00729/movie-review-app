import styled from "styled-components";
import { MD } from "../../utils/styles";

export const MovieImage = styled.img`
  width: 220px;
  height: 330px;
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const MovieTitle = styled.label`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  @media ${MD} {
    text-align: unset;
  }
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  align-items: center;
  @media ${MD} {
    align-items: flex-start;
  }
`;
