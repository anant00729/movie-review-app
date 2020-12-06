import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import MovieReview from "./pages/movie-review";
import Header from "./components/header";
import { Route, Switch } from "react-router-dom";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  MOVIE_REVIEW_ROUTE,
} from "./utils/constants";

function PageRoutes() {
  return (
    <div
      style={{
        position: "relative",
        overflowY: "auto",
      }}
    >
      <Header />
      <div
        id="layout"
        style={{
          marginTop: "52px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Switch>
          <Route exact path={HOME_ROUTE} component={Home} />
          <Route exact path={LOGIN_ROUTE} component={Login} />
          <Route exact path={REGISTER_ROUTE} component={Register} />
          <Route
            exact
            path={`${MOVIE_REVIEW_ROUTE}/:id`}
            component={MovieReview}
          />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default PageRoutes;
