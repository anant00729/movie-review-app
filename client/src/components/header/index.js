import React from "react";
import {
  HeaderWrapper,
  HeaderLabelWrapper,
  HeaderContainer,
  AppHeaderLogo,
  HeaderLabel,
} from "./styles";
import { AppContainer } from "../../utils/styles";
import AppLogo from "../../images/planet.svg";

function Header() {
  return (
    <HeaderWrapper>
      <AppContainer id="AppContainer">
        <HeaderContainer>
          {/* Right */}
          <AppHeaderLogo src={AppLogo} alt="app_logo" />
          <HeaderLabelWrapper>
            <HeaderLabel>Movistar</HeaderLabel>
          </HeaderLabelWrapper>
          {/* Left Side */}
          <HeaderLabelWrapper gotoLeft={true}>
            <HeaderLabel>Login</HeaderLabel>
          </HeaderLabelWrapper>
          <HeaderLabelWrapper>
            <HeaderLabel>Register</HeaderLabel>
          </HeaderLabelWrapper>
        </HeaderContainer>
      </AppContainer>
    </HeaderWrapper>
  );
}

export default Header;
