import React from "react";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (name.length < 3) {
      setNameError("The length of your name should be more then 3");
      return;
    } else {
      setNameError("");
    }
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(`Error found ${error}`);
      });
  };
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center border border-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Register your account</h2>
        <hr className="mb-6 border-gray-200" />

        <form onSubmit={handleRegister} className="text-left">
          {/* Name */}
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 mb-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          {
            nameError&& <p className="text-red-200">{nameError}</p>
          }

          {/* Photo URL */}
          <label htmlFor="photo" className="block text-sm font-semibold mb-2">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter your photo URL"
            className="w-full p-3 mb-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Email */}
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full p-3 mb-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          {/* Password */}
          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-3 mb-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          {/* Terms & Conditions */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              name="terms"
              className="mr-2 accent-gray-800"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Accept{" "}
              <span className="font-semibold text-gray-800">
                Term & Conditions
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition-colors"
          >
            Register
          </button>
          <p className="mt-2">
            Already Have an Account?
            <Link to={"/auth/login"} className="text-red-400 px-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
