import React from "react";
import {
  LoginCard,
  LoginContainer,
  LoginLogo,
  LoginLabel,
  LoginForm,
} from "./../login/styles";
import LoginLogoImg from "../../images/earth-2.svg";
import { AppInput, AppButton, AppFormLabel } from "../../utils/styles";

function Register() {
  return (
    <LoginContainer>
      <LoginCard>
        <LoginLogo src={LoginLogoImg} alt="login_logo" />
        <LoginLabel>Welcome user</LoginLabel>
        <LoginForm>
          <AppFormLabel>Email</AppFormLabel>
          <AppInput type="email" />
          <AppFormLabel>Username</AppFormLabel>
          <AppInput type="text" />
          <AppFormLabel>Password</AppFormLabel>
          <AppInput type="password" />
          <AppFormLabel>Confirm Password</AppFormLabel>
          <AppInput type="password" />
          <AppButton>Register</AppButton>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
}

export default Register;
