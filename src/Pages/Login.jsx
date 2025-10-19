import React from "react";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn, setUser } = use(AuthContext);
  const hanldeLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => setUser(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center border border-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Login your account</h2>
        <hr className="mb-6 border-gray-200" />

        <form onSubmit={hanldeLogin} className="text-left">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full p-3 mb-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3  bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <p className="mt-2 mb-6 text-red-500 btn bg-transparent border-0 shadow-none">
            Forget Password ?
          </p>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Don’t Have An Account?{" "}
          <Link
            to="/auth/register"
            className="text-red-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
