import React, { useState, useContext } from "react";
import {
  LoginCard,
  LoginContainer,
  LoginLogo,
  LoginLabel,
  LoginForm,
} from "./../login/styles";
import LoginLogoImg from "../../images/earth-2.svg";
import { AppInput, AppButton, AppFormLabel } from "../../utils/styles";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/constants";

function Register({ history }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const { storeAuth } = useContext(GlobalContext);

  const handleRegisterClick = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "/v1/auth/register",
      data: {
        email: inputEmail,
        username: inputUsername,
        password: inputPassword,
      },
    })
      .then((res) => {
        storeAuth(res?.data?.token, res?.data?.user?.id);
        history.push(HOME_ROUTE);
      })
      .catch((error) => {
        console.log("error.message :>> ", error.message);
      });
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginLogo src={LoginLogoImg} alt="login_logo" />
        <LoginLabel>Welcome user</LoginLabel>
        <LoginForm>
          <AppFormLabel>Email</AppFormLabel>
          <AppInput
            onChange={(e) => setInputEmail(e.target.value)}
            value={inputEmail}
            type="email"
          />
          <AppFormLabel>Username</AppFormLabel>
          <AppInput
            onChange={(e) => setInputUsername(e.target.value)}
            value={inputUsername}
            type="text"
          />
          <AppFormLabel>Password</AppFormLabel>
          <AppInput
            onChange={(e) => setInputPassword(e.target.value)}
            value={inputPassword}
            type="password"
          />
          <AppFormLabel>Confirm Password</AppFormLabel>
          <AppInput
            onChange={(e) => setInputConfirmPassword(e.target.value)}
            value={inputConfirmPassword}
            type="password"
          />
          <AppButton onClick={(e) => handleRegisterClick(e)}>
            Register
          </AppButton>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
}

export default withRouter(Register);
