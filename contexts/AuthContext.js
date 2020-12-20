import React, { createContext, useContext, useReducer } from "react";
import { getItem, removeItem, setItem } from "../utils/localStorage";
import JWTValidator from "../utils/JWTValidator";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "LOGIN":
          setItem("token", action.payload.token);
          return { ...state, authenticated: true };
        case "LOGOUT":
          removeItem("token");
          return { authenticated: false };
        default:
          throw new Error("undefined action type used");
      }
    },
    { authenticated: !!getItem("token") && JWTValidator(getItem("token")) }
  );

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
  return context;
};

export const useAuth = () => {
  const authContext = useAuthContext();
  const authDispatch = useAuthDispatch();

  const login = (token) => {
    authDispatch({ type: "LOGIN", payload: { token } });
  };
  const logout = () => {
    authDispatch({ type: "LOGOUT", payload: null });
  };

  return { authenticated: authContext.authenticated, login, logout };
};
