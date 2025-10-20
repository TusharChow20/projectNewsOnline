import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logged Out");
      })
      .catch();
  };
  console.log(user);

  return (
    <div className="relative">
      {/* Desktop & Mobile Header */}
      <div className="flex justify-between items-center text-accent">
        {/* Logo/Brand Space */}
        <div className="font-bold text-lg sm:text-xl"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex nav gap-4 lg:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primary"
                : "hover:text-primary transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primary"
                : "hover:text-primary transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primary"
                : "hover:text-primary transition"
            }
          >
            Career
          </NavLink>
        </div>

        {/* Desktop Login */}
        <div className="hidden md:flex login gap-2 lg:gap-3 items-center">
          <img
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
            src={`${user ? user.photoURL : userImg}`}
            alt=""
          />

          {user ? (
            <Link
              onClick={handleLogout}
              className="btn btn-secondary btn-sm lg:btn-md px-4 lg:px-10"
            >
              {" "}
              Logout
            </Link>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn btn-secondary btn-sm lg:btn-md px-4 lg:px-10"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-base-200 shadow-lg rounded-lg mt-2 p-4 z-50">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-3 rounded ${
                  isActive ? "bg-primary text-white" : "hover:bg-base-300"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 px-3 rounded ${
                  isActive ? "bg-primary text-white" : "hover:bg-base-300"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `py-2 px-3 rounded ${
                  isActive ? "bg-primary text-white" : "hover:bg-base-300"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Career
            </NavLink>
            <div className="flex items-center gap-3 pt-2 border-t border-base-300">
              <img
                src={userImg}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <Link
                to={"/auth/login"}
                className="btn btn-secondary btn-sm flex-1"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
