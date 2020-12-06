import React from "react";
import {
  LoginCard,
  LoginContainer,
  LoginLogo,
  LoginLabel,
  LoginForm,
} from "./styles";
import LoginLogoImg from "../../images/earth-2.svg";
import { AppInput, AppButton, AppFormLabel } from "../../utils/styles";

function Login() {
  return (
    <LoginContainer>
      <LoginCard>
        <LoginLogo src={LoginLogoImg} alt="login_logo" />
        <LoginLabel>Welcome user</LoginLabel>
        <LoginForm>
          <AppFormLabel>Email</AppFormLabel>
          <AppInput type="email" />
          <AppFormLabel>Password</AppFormLabel>
          <AppInput type="password" />
          <AppButton> Login</AppButton>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;
