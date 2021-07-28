import {
  ON_LOGIN_CHANGE
} from "./types";

const appReducer = (state, action) => {
  switch (action.type) {
    case ON_LOGIN_CHANGE:
      localStorage.setItem('isLoggedIn', action.payload)
      return {
        ...state,
        isLoggedIn:  action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;