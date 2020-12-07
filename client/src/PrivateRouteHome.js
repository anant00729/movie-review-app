import React from "react";
import { Route, Redirect } from "react-router-dom";
import { HOME_ROUTE } from "../src/utils/constants";

const PrivateRouteHome = ({ component: Component, ...rest }) => {
  const isAuthenticated =
    !!localStorage.getItem("user_token") &&
    localStorage.getItem("user_token") != "undefined";
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to={HOME_ROUTE} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRouteHome;
