import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  CLEAR_TOKEN_AND_USER_ID,
  STORE_TOKEN_AND_USER_ID,
  GET_ALL_MOVIE_REVIEWS,
  CREATE_REVIEW_POST,
  CLEAR_REVIEWS,
} from "./types";

// Initial state
const initialState = {
  user_token: localStorage.getItem("user_token"),
  user_id: localStorage.getItem("user_id"),
  username: localStorage.getItem("username"),
  isAuthenticated:
    !!localStorage.getItem("user_token") &&
    localStorage.getItem("user_token") != "undefined",
  all_reviews: [],
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

  function storeAuth(token, user_id, username) {
    dispatch({
      type: STORE_TOKEN_AND_USER_ID,
      payload: { token, user_id, username },
    });
  }

  function createReviewPost(reviewData) {
    dispatch({
      type: CREATE_REVIEW_POST,
      payload: reviewData,
    });
  }

  function storeAllReviews(reviewList) {
    dispatch({
      type: GET_ALL_MOVIE_REVIEWS,
      payload: reviewList,
    });
  }

  function clearAllReviews() {
    dispatch({
      type: CLEAR_REVIEWS,
      payload: [],
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        user_token: state.user_token,
        user_id: state.user_id,
        isAuthenticated: state.isAuthenticated,
        all_reviews: state.all_reviews,
        clearAuth,
        storeAuth,
        createReviewPost,
        storeAllReviews,
        clearAllReviews,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
