import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import errorAnimation from "../../public/error.json";

const Login = () => {
  const { signIn, setUser, logOut, verifyEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showErrorAnimation, setShowErrorAnimation] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    try {
      Swal.fire({
        title: "Logging in...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const result = await signIn(email, password);
      console.log("Login successful:", result.user.email);

      if (!result.user.emailVerified) {
        console.log("Email not verified");

        const resendResult = await Swal.fire({
          icon: "warning",
          title: "Email Not Verified",
          html: `
            <p>Your email address has not been verified yet.</p>
            <p style="margin-top: 15px;">Please check your inbox at:</p>
            <p style="color: #1f2937; font-weight: bold; margin: 10px 0;">${email}</p>
            <p style="margin-top: 15px; font-size: 14px;">Would you like us to resend the verification email?</p>
          `,
          showCancelButton: true,
          confirmButtonColor: "#1f2937",
          cancelButtonColor: "#6b7280",
          confirmButtonText: "Resend Email",
          cancelButtonText: "Cancel",
          allowOutsideClick: false,
        });

        if (resendResult.isConfirmed) {
          try {
            await verifyEmail();
            
            Swal.fire({
              icon: "success",
              title: "Verification Email Sent!",
              html: `
                <p>A new verification email has been sent to:</p>
                <p style="color: #1f2937; font-weight: bold; margin: 10px 0;">${email}</p>
                <p style="margin-top: 15px; font-size: 14px;">Please check your inbox (and spam folder) and verify your email before logging in.</p>
              `,
              confirmButtonColor: "#1f2937",
              confirmButtonText: "OK",
            });
          } catch (resendError) {
            console.error("Resend error:", resendError);
            
            if (resendError.code === "auth/too-many-requests") {
              Swal.fire({
                icon: "error",
                title: "Too Many Requests",
                text: "Please wait a few minutes before requesting another verification email.",
                confirmButtonColor: "#1f2937",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Failed to Resend",
                text: "Could not resend verification email. Please try again later.",
                confirmButtonColor: "#1f2937",
              });
            }
          }
        }

        await logOut();
        form.reset();
        return;
      }
      setUser(result.user);

      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome back, ${result.user.displayName || "User"}!`,
        confirmButtonColor: "#1f2937",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate(location.state?.from || "/");
      }, 1500);

      form.reset();
    } catch (error) {
      console.error("Login error:", error);
      setShowErrorAnimation(true);
      setTimeout(() => setShowErrorAnimation(false), 3000);

      let errorMessage = "Something went wrong. Please try again.";
      let errorTitle = "Login Failed";

      if (error.code === "auth/user-not-found") {
        errorMessage =
          "No account found with this email. Please register first.";
        errorTitle = "Account Not Found";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
        errorTitle = "Wrong Password";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address. Please check and try again.";
        errorTitle = "Invalid Email";
      } else if (error.code === "auth/user-disabled") {
        errorMessage =
          "This account has been disabled. Please contact support.";
        errorTitle = "Account Disabled";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid email or password. Please check your credentials.";
        errorTitle = "Invalid Credentials";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage =
          "Too many failed login attempts. Please try again later or reset your password.";
        errorTitle = "Too Many Attempts";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage =
          "Network error. Please check your internet connection and try again.";
        errorTitle = "Network Error";
      } else {
        errorMessage = error.message || errorMessage;
      }

      setError(errorMessage);

      Swal.fire({
        icon: "error",
        title: errorTitle,
        text: errorMessage,
        confirmButtonColor: "#1f2937",
      });
    }
  };

  const handleForgotPassword = () => {
    Swal.fire({
      title: "Reset Password",
      text: "This feature will be available soon. Please contact support if you need help.",
      icon: "info",
      confirmButtonColor: "#1f2937",
    });
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen py-8">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Login your account</h2>
        <hr className="mb-6 border-gray-200" />

        {showErrorAnimation && (
          <div className="mb-4">
            <Lottie
              animationData={errorAnimation}
              loop={true}
              style={{ height: 150, width: 150, margin: "0 auto" }}
            />
          </div>
        )}

        <form onSubmit={handleLogin} className="text-left">

          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full p-3 mb-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
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
            className="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <button
            type="button"
            onClick={handleForgotPassword}
            className="mt-2 text-sm text-red-500 hover:underline"
          >
            Forgot Password?
          </button>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          <button
            type="submit"
            className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Don't Have An Account?{" "}
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