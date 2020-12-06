import styled from "styled-components";
import { AppContainer } from "../../utils/styles";

export const LoginCard = styled.div`
  background-color: #202020;
  border: 1px solid #fdce14;
  border-radius: 4px;
  box-shadow: 0 10px 0 -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  min-width: 400px;
`;

export const LoginContainer = styled(AppContainer)`
  height: calc(100vh - 52px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginLogo = styled.img`
  width: 120px;
  height: 120px;
`;

export const LoginLabel = styled.label`
  font-size: 24px;
  color: #fff;
  letter-spacing: 1px;
  margin-top: 16px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
