import { createContext, useReducer } from "react";
// import User from "../Data/User.json";

export const AppContext = createContext();

const initialState = {
  isLogin: false,
  user: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", payload.token);
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLogin: true,
        user: payload,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        user: null,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const hari = "Sabtu 05-06-2021";
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch, hari]}>
      {props.children}
    </AppContext.Provider>
  );
};
