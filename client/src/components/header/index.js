import React, { useContext } from "react";
import {
  HeaderWrapper,
  HeaderLabelWrapper,
  HeaderContainer,
  AppHeaderLogo,
  HeaderLabel,
  ProfilePic,
} from "./styles";
import { AppContainer } from "../../utils/styles";
import AppLogo from "../../images/planet.svg";
import { Link, withRouter } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE, HOME_ROUTE } from "../../utils/constants";
import { GlobalContext } from "../../global/GlobalContext";

function Header({ history }) {
  const { isAuthenticated, clearAuth, username } = useContext(GlobalContext);

  const handleLogout = () => {
    clearAuth();
    history.push(LOGIN_ROUTE);
  };

  const showLoginRegisterOptions = () => {
    return (
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <Link to={LOGIN_ROUTE} style={{ textDecoration: "none" }}>
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
      </div>
    );
  };

  const showUserOptions = () => {
    return (
      <div
        style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
      >
        <Link to={LOGIN_ROUTE} style={{ textDecoration: "none" }}>
          <HeaderLabelWrapper onClick={() => handleLogout()}>
            <HeaderLabel>Logout</HeaderLabel>
          </HeaderLabelWrapper>
        </Link>
        {username?.length > 0 ? (
          <ProfilePic
            id="profile-img"
            alt="profile-img"
            src={`https://avatar.oxro.io/avatar.svg?name=${username}&length=2`}
          />
        ) : null}
      </div>
    );
  };

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
          {isAuthenticated ? showUserOptions() : showLoginRegisterOptions()}
        </HeaderContainer>
      </AppContainer>
    </HeaderWrapper>
  );
}

export default withRouter(Header);
