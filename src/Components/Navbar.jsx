import React from "react";
import { NavLink } from "react-router";
import userImg from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-accent">
      <div className=""></div>
      <div className="nav flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login flex gap-3">
        <img src={userImg} alt="" />
        <button className="btn btn-secondary p-5 px-10">LogIn</button>
      </div>
    </div>
  );
};

export default Navbar;
