import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  background-color: #202020;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderLabelWrapper = styled.div`
  margin-left: ${(p) => (p.gotoLeft ? "auto" : "12px")};
  padding: 8px 10px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #fdce14;
    color: #202020;
    border-radius: 4px;
  }
`;

export const HeaderLabel = styled.label`
  cursor: pointer;
`;

export const AppHeaderLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 16px;
`;
