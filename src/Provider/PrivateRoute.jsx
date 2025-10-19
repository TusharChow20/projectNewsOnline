import React from "react";
import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, load } = use(AuthContext);
  if (load) {
    return <span className="loading loading-ring loading-xl"></span>;
  }
  return (
    <div>
      {user && user?.email ? (
        children
      ) : (
        <Navigate to={"/auth/login"}></Navigate>
      )}
    </div>
  );
};

export default PrivateRoute;
