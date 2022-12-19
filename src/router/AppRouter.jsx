import { Route, Routes } from "react-router-dom";

import { Navbar } from "../ui";

import { Login } from "../auth/pages/Login";
import { HomeRoutes } from "../home/routes/HomeRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HomeRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
