import React from "react";
import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, Navigate } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, load } = use(AuthContext);
  if (load) {
    return <Loading></Loading>;
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
