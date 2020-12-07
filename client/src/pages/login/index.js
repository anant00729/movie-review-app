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
import { HOME_ROUTE } from "../../utils/constants";
import axios from "axios";
import { GlobalContext } from "../../global/GlobalContext";

function Login({ history }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const { storeAuth } = useContext(GlobalContext);

  const handleLoginClick = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "/v1/auth/login",
      data: {
        email: inputEmail,
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
