import styled, { css } from "styled-components";
import { MD } from "../../utils/styles";

export const Snackbar = styled.div`
  /* Hidden by default. Visible on click */
  min-width: 290px;
  /* Set a default minimum width */
  /* margin: 0 auto; */
  /* Divide value of min-width by 2 */
  background-color: transparent; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 1rem; /* Rounded borders */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  transform: translateX(-50%);
  bottom: 30px; /* 30px from the bottom */
  ${(p) =>
    p.isVisible
      ? css`
          visibility: visible; /* Show the snackbar */
          -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
          animation: fadein 0.5s, fadeout 0.5s 2.5s;
        `
      : css`
          visibility: hidden;
        `}
`;

export const SnackbarContainer = styled.div`
  width: 100%;
  background-color: #202020;
  border: 1px solid #fdce14;
  border-radius: 4px;
  box-shadow: 0 10px 0 -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
`;

export const AlertLabel = styled.label`
  font-size: 20px;
  margin-left: 12px;
`;

export const AlertLogo = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 12px;

  @media ${MD} {
    margin-left: unset;
  }
`;
