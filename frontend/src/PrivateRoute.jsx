import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const token = localStorage.getItem("authToken"); // Get token from localStorage

  return token ? <Outlet /> : <Navigate to="/login" />; // Redirect to login if no token
};
