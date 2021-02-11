import styled from "styled-components";

/* Style the accordion section */
export const Accordion_Section = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid #5d5d5d;
  border-bottom: 0.5px solid #5d5d5d;
`;

/* Style the buttons that are used to open and close the accordion panel */
export const Accordion = styled.div`
  cursor: pointer;
  padding: 0;
  background-color: #0b0c0f;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: none;
  outline: none !important;
  transition: background-color 0.6s ease;
`;

/* Style the accordion content title */
export const Accordion_Title = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
`;

/* Style the accordion chevron icon */
export const Accordion_Icon = styled.div`
  margin-left: auto;
  margin-right: 16px;
  transition: transform 0.6s ease;
  flex: 1;
  width: 24px;
  height: 24px;
`;

export const Rotate = styled.div`
  transform: rotate(180deg);
`;

export const Accordion_Content = styled.div`
  background-color: #0b0c0f;
  transition: height 0.6s ease;
  overflow: hidden;
`;

/* Style the accordion content text */
export const Accordion_Text = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
  color: white;
`;

export const ItemDetailClosed = styled.div`
  width: 100%;
  height: 156px;
  background-color: beige;
`;

