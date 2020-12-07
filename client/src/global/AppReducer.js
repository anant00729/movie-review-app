import {
  STORE_TOKEN_AND_USER_ID,
  CLEAR_TOKEN_AND_USER_ID,
  CREATE_REVIEW_POST,
  GET_ALL_MOVIE_REVIEWS,
} from "./types";

const appReducer = (state, action) => {
  switch (action.type) {
    case STORE_TOKEN_AND_USER_ID:
      localStorage.setItem("user_token", action?.payload?.token);
      localStorage.setItem("user_id", action?.payload?.user_id);
      localStorage.setItem("username", action?.payload?.username);
      return {
        ...state,
        user_token: action?.payload?.token,
        user_id: action?.payload?.user_id,
        username: action?.payload?.username,
        isAuthenticated: true,
      };
    case CLEAR_TOKEN_AND_USER_ID:
      localStorage.removeItem("user_token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("username");
      localStorage.clear();
      return {
        ...state,
        user_token: "",
        user_id: "",
        isAuthenticated: false,
      };

    case CREATE_REVIEW_POST:
      const username = localStorage.getItem("username");
      return {
        ...state,
        all_reviews: [{ ...action?.payload, username }, ...state.all_reviews],
      };

    case GET_ALL_MOVIE_REVIEWS:
      return {
        ...state,
        all_reviews: [...action?.payload],
      };

    default:
      return state;
  }
};

export default appReducer;
