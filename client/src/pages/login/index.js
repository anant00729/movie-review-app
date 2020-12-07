import React, { useState, useContext } from "react";
import {
  LoginCard,
  LoginContainer,
  LoginLogo,
  LoginLabel,
  LoginForm,
} from "./styles";
import LoginLogoImg from "../../images/earth-2.svg";
import { AppInput, AppButton, AppFormLabel } from "../../utils/styles";
import { withRouter } from "react-router-dom";
import { HOME_ROUTE, validateEmail } from "../../utils/constants";
import axios from "axios";
import { GlobalContext } from "../../global/GlobalContext";

function Login({ history }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const { storeAuth, setAlert } = useContext(GlobalContext);

  const handleLoginClick = (e) => {
    e.preventDefault();

    if (!inputEmail?.length) {
      setAlert("Please enter your email.");
      return;
    } else if (!validateEmail(inputEmail)) {
      setAlert("Please enter valid email address.");
      return;
    } else if (!inputPassword?.length) {
      setAlert("Please enter your password.");
      return;
    }

    axios({
      method: "POST",
      url: "/v1/auth/login",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        email: inputEmail,
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
        }
      })
      .catch((error) => {
        console.log("error.message :>> ", error?.message);
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
          <AppFormLabel>Password</AppFormLabel>
          <AppInput
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            type="password"
          />
          <AppButton onClick={(e) => handleLoginClick(e)}>Login</AppButton>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
}

export default withRouter(Login);

// onClick={(e) =>
//   handleLoginClick(e)
