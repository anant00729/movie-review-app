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
import { HOME_ROUTE, validateEmail } from "../../utils/constants";

function Register({ history }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const { storeAuth, setAlert } = useContext(GlobalContext);

  const handleRegisterClick = (e) => {
    e.preventDefault();

    if (!inputEmail?.length) {
      setAlert("Please enter your email.");
      return;
    } else if (!validateEmail(inputEmail)) {
      setAlert("Please enter valid email address.");
      return;
    } else if (!inputUsername?.length) {
      setAlert("Please enter your username.");
      return;
    } else if (!inputPassword?.length) {
      setAlert("Please enter a password.");
      return;
    } else if (!inputConfirmPassword?.length) {
      setAlert("Please enter a confirm password.");
      return;
    } else if (inputPassword?.length < 6) {
      setAlert("Passwords must be more than 5 characters.");
      return;
    } else if (inputConfirmPassword !== inputPassword) {
      setAlert("Passwords do not match.");
      return;
    }

    axios({
      method: "POST",
      url: "/v1/auth/register",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        email: inputEmail,
        username: inputUsername,
        password: inputPassword,
      },
    })
      .then((res) => {
        if (res?.data?.status) {
          storeAuth(
            res?.data?.token,
            res?.data?.user?.id,
            res?.data?.user?.username
          );
          history.push(HOME_ROUTE);
        } else {
          setAlert(res?.data?.message);
        }
      })
      .catch((error) => {
        setAlert(error?.message);
      });
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginLogo src={LoginLogoImg} alt="login_logo" />
        <LoginLabel>Hello new user</LoginLabel>
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
