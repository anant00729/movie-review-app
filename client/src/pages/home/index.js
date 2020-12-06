import React, { useState } from "react";
import {
  HomeBannerBG,
  HomeBlurrContainer,
  MainWrapper,
  MovieListGrid,
  HomeStack,
  WelcomeMessageWrapper,
  Title,
  Subtitle,
} from "./styles";
import { AppContainer } from "../../utils/styles";

import MovieItem from "../../components/movie-item";

function Home(props) {
  return (
    <MainWrapper>
      {/* Header */}
      <HomeStack>
        <HomeBannerBG
          src="https://pbs.twimg.com/media/Dz_LPnmUUAUrjAi?format=jpg&name=4096x4096"
          alt="home-img"
        />

        <WelcomeMessageWrapper>
          <div>
            <Title> Welcome.</Title>
          </div>
          <Subtitle>
            Millions of movies, TV shows and people to discover. Explore now.{" "}
          </Subtitle>
        </WelcomeMessageWrapper>
      </HomeStack>

      {/* Body */}

      <AppContainer>
        <HomeBlurrContainer>
          <MovieListGrid>
            {[
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              11,
              1,
              1,
              1,
              11,
              1,
              1,
              1,
              11,
              1,
              1,
              1,
              1,
            ].map((data, index) => {
              return <MovieItem key={index} data={data} />;
            })}
          </MovieListGrid>
        </HomeBlurrContainer>
      </AppContainer>
    </MainWrapper>
  );
}

export default Home;
