import styled from "styled-components";
import { AppContainer, MD } from "../../utils/styles";

export const MovieReviewContainer = styled(AppContainer)``;

export const MovieReviewLayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media ${MD} {
    grid-template-columns: 300px 1fr;
  }
`;
