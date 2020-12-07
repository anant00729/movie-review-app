import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  CLEAR_TOKEN_AND_USER_ID,
  STORE_TOKEN_AND_USER_ID,
  GET_ALL_MOVIE_REVIEWS,
  CREATE_REVIEW_POST,
  CLEAR_REVIEWS,
  SET_ALERT,
  REMOVE_ALERT,
} from "./types";
import { v4 as uuidv4 } from "uuid";

// Initial state
const initialState = {
  user_token: localStorage.getItem("user_token"),
  user_id: localStorage.getItem("user_id"),
  username: localStorage.getItem("username"),
  isAuthenticated:
    !!localStorage.getItem("user_token") &&
    localStorage.getItem("user_token") != "undefined",
  all_reviews: [],
  alerts: [],
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

  function setAlert(msg, timeout = 2500) {
    if (msg) {
      const id = uuidv4();
      dispatch({
        type: SET_ALERT,
        payload: { msg, id },
      });

      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        user_token: state.user_token,
        user_id: state.user_id,
        username: state.username,
        isAuthenticated: state.isAuthenticated,
        all_reviews: state.all_reviews,
        alerts: state.alerts,
        clearAuth,
        storeAuth,
        createReviewPost,
        storeAllReviews,
        clearAllReviews,
        setAlert,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
