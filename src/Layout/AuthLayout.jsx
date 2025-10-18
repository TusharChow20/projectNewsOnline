import React from "react";
import Navbar from "../Components/Navbar";
import Login from "../Pages/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </header>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default AuthLayout;
