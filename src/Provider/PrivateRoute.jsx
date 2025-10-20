import React from "react";
import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, load } = use(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (load) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {user && user?.email ? (
        children
      ) : (
        <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
      )}
    </div>
  );
};

export default PrivateRoute;
