import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, currentUser }) => {
  //   const currentUser = localStorage.getItem("loggedUser");

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
