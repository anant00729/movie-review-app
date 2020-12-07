import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { CLEAR_TOKEN_AND_USER_ID, STORE_TOKEN_AND_USER_ID } from "./types";

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
