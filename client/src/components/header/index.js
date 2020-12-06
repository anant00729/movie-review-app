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
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE, HOME_ROUTE } from "../../utils/constants";

function Header() {
  return (
    <HeaderWrapper>
      <AppContainer id="AppContainer">
        <HeaderContainer>
          {/* Right */}
          <AppHeaderLogo src={AppLogo} alt="app_logo" />
          <Link
            to={HOME_ROUTE}
            style={{ textDecoration: "none", marginLeft: "12px" }}
          >
            <HeaderLabelWrapper>
              <HeaderLabel style={{ letterSpacing: "2px", fontSize: "18px" }}>
                Movistar
              </HeaderLabel>
            </HeaderLabelWrapper>
          </Link>

          {/* Left Side */}
          <Link
            to={LOGIN_ROUTE}
            style={{ textDecoration: "none", marginLeft: "auto" }}
          >
            <HeaderLabelWrapper>
              <HeaderLabel>Login</HeaderLabel>
            </HeaderLabelWrapper>
          </Link>

          <Link
            to={REGISTER_ROUTE}
            style={{ textDecoration: "none", marginLeft: "12px" }}
          >
            <HeaderLabelWrapper>
              <HeaderLabel>Register</HeaderLabel>
            </HeaderLabelWrapper>
          </Link>
        </HeaderContainer>
      </AppContainer>
    </HeaderWrapper>
  );
}

export default Header;
