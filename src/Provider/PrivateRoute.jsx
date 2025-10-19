import React from "react";
import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  return (
    <div>
      <h1>Private Route</h1>
      {user && user?.email ? (
        children
      ) : (
        <Navigate to={"/auth/login"}></Navigate>
      )}
    </div>
  );
};

export default PrivateRoute;
