import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  CLEAR_TOKEN_AND_USER_ID,
  STORE_TOKEN_AND_USER_ID,
  GET_ALL_MOVIE_REVIEWS,
  CREATE_REVIEW_POST,
} from "./types";

// Initial state
const initialState = {
  user_token: localStorage.getItem("user_token"),
  user_id: localStorage.getItem("user_id"),
  isAuthenticated:
    !!localStorage.getItem("user_token") &&
    localStorage.getItem("user_token") != "undefined",
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function clearAuth() {
    dispatch({
      type: CLEAR_TOKEN_AND_USER_ID,
    });
  }

  function storeAuth(token, user_id) {
    dispatch({
      type: STORE_TOKEN_AND_USER_ID,
      payload: { token, user_id },
    });
  }

  function createReviewPost(reviewData) {
    dispatch({
      type: CREATE_REVIEW_POST,
      payload: reviewData,
    });
  }

  function storeAllMovieReviews(reviewList) {
    dispatch({
      type: GET_ALL_MOVIE_REVIEWS,
      payload: reviewList,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        user_token: state.user_token,
        user_id: state.user_id,
        isAuthenticated: state.isAuthenticated,
        clearAuth,
        storeAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
