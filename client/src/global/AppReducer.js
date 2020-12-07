import { STORE_TOKEN_AND_USER_ID, CLEAR_TOKEN_AND_USER_ID } from "./types";

const appReducer = (state, action) => {
  switch (action.type) {
    case STORE_TOKEN_AND_USER_ID:
      localStorage.setItem("user_token", action?.payload?.token);
      localStorage.setItem("user_id", action?.payload?.user_id);
      return {
        ...state,
        user_token: action?.payload?.token,
        user_id: action?.payload?.user_id,
        isAuthenticated: true,
      };
    case CLEAR_TOKEN_AND_USER_ID:
      localStorage.removeItem("user_token");
      localStorage.removeItem("user_id");
      localStorage.clear();
      return {
        ...state,
        user_token: "",
        user_id: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default appReducer;
