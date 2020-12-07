import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOGIN_ROUTE } from "../src/utils/constants";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("user_token");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={LOGIN_ROUTE} />
        )
      }
    />
  );
};

export default PrivateRoute;
