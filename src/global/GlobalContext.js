import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  ON_LOGIN_CHANGE,
} from "./types";


// Initial state
const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || '0',
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function onLoginValueChanged(loginValue) {
    dispatch({
      type: ON_LOGIN_CHANGE,
      payload: loginValue,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        onLoginValueChanged,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};