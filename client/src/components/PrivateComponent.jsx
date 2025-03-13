import React from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import CarLoadingScreen from "./CarLoadingScreen";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const { loggedIn, checkUser } = useAuthStatus();

  if (checkUser) {
    return <CarLoadingScreen />;
  }

  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateComponent;
