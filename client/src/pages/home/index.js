import React, { useState, useEffect } from "react";
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
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("/v1/movie/getMovieList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pageNumber: 1 }),
    })
      .then((res) => res.json())
      .then((res_d) => {
        if (res_d.results.length > 0) {
          setMovieList(res_d.results);
        }
      })
      .catch((error) => {
        console.log("error.message :>> ", error.message);
      });
  }, []);

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
          {movieList.length > 0 ? (
            <MovieListGrid>
              {movieList.map((movie, index) => {
                return <MovieItem key={index} movie={movie} />;
              })}
            </MovieListGrid>
          ) : (
            <div style={{ textAlign: "center", color: "#fff" }}>
              <h2>Loading... </h2>
            </div>
          )}
        </HomeBlurrContainer>
      </AppContainer>
    </MainWrapper>
  );
}

export default Home;
