import React from "react";
import { useAuthContext } from "../../context/authContext";
import { Outlet } from "react-router-dom";
import AuthPage from "../../pages/AuthPage";

const ProtectedRoutes = () => {
  const { currentUser } = useAuthContext();

  return currentUser?.role === "admin" ? <Outlet /> : <AuthPage />;
};

export default ProtectedRoutes;
