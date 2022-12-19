import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

export const AuthContext = createContext();

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (email, password) => {
    const user = { email };

    const action = { type: types.login, payload: user };

    if (email === "grupoASD@gmail.com" && password === "Rjs2022*") {
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(action);
    }
  };

  const logout = () => {
    localStorage.clear("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  const values = {
    ...authState,

    // Metodos
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
