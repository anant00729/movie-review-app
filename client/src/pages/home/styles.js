import styled from "styled-components";
import { SM, MD, LG } from "../../utils/styles";
import { AppContainer } from "../../utils/styles";

export const HomeBannerBG = styled.img`
  height: 200px;
  border-radius: 8px;
  flex: 1;
  object-fit: cover;

  @media ${LG} {
    height: 350px;
  }
`;

export const HomeBlurrContainer = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const MovieListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${SM} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${MD} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${LG} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const HomeStack = styled(AppContainer)`
  display: flex;
  margin-top: 24px;

  flex-direction: column;
  @media ${MD} {
    flex-direction: row;
  }
`;

export const WelcomeMessageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  margin-top: 16px;

  @media ${MD} {
    margin-top: unset;
  }
`;

export const Title = styled.label`
  font-size: 32px;
  color: #fff;
`;

export const Subtitle = styled.label`
  font-size: 16px;
  color: #fff;
  margin-top: 16px;
`;
