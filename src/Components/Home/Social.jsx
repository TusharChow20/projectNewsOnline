import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";
// import { AuthContext } from "../Provider/AuthProvider";
// import auth from "../FireBase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../FireBase/firebase.config";

const Social = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogle = async () => {
    try {
      // Show loading
      Swal.fire({
        title: "Connecting to Google...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login successful:", result.user);

      // Update user state
      setUser(result.user);

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome, ${result.user.displayName || "User"}!`,
        confirmButtonColor: "#1f2937",
        timer: 1500,
        showConfirmButton: false,
      });

      // Navigate after success
      setTimeout(() => {
        navigate(location.state?.from || "/");
      }, 1500);
    } catch (error) {
      console.error("Google login error:", error);

      let errorMessage = "Failed to login with Google. Please try again.";
      let errorTitle = "Google Login Failed";

      // Handle specific errors
      if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "Login cancelled. Please try again.";
        errorTitle = "Login Cancelled";
      } else if (error.code === "auth/popup-blocked") {
        errorMessage =
          "Popup was blocked by browser. Please allow popups and try again.";
        errorTitle = "Popup Blocked";
      } else if (error.code === "auth/cancelled-popup-request") {
        errorMessage = "Another popup is already open. Please close it first.";
        errorTitle = "Popup Already Open";
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        errorMessage =
          "An account already exists with this email using a different login method.";
        errorTitle = "Account Exists";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage =
          "Network error. Please check your internet connection and try again.";
        errorTitle = "Network Error";
      } else {
        errorMessage = error.message || errorMessage;
      }

      Swal.fire({
        icon: "error",
        title: errorTitle,
        text: errorMessage,
        confirmButtonColor: "#1f2937",
      });
    }
  };

  const handleGithub = async () => {
    try {
      // Show loading
      Swal.fire({
        title: "Connecting to GitHub...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const result = await signInWithPopup(auth, githubProvider);
      console.log("GitHub login successful:", result.user);

      // Update user state
      setUser(result.user);

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome, ${result.user.displayName || "User"}!`,
        confirmButtonColor: "#1f2937",
        timer: 1500,
        showConfirmButton: false,
      });

      // Navigate after success
      setTimeout(() => {
        navigate(location.state?.from || "/");
      }, 1500);
    } catch (error) {
      console.error("GitHub login error:", error);

      let errorMessage = "Failed to login with GitHub. Please try again.";
      let errorTitle = "GitHub Login Failed";

      // Handle specific errors
      if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "Login cancelled. Please try again.";
        errorTitle = "Login Cancelled";
      } else if (error.code === "auth/popup-blocked") {
        errorMessage =
          "Popup was blocked by browser. Please allow popups and try again.";
        errorTitle = "Popup Blocked";
      } else if (error.code === "auth/cancelled-popup-request") {
        errorMessage = "Another popup is already open. Please close it first.";
        errorTitle = "Popup Already Open";
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        errorMessage =
          "An account already exists with this email using a different login method.";
        errorTitle = "Account Exists";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage =
          "Network error. Please check your internet connection and try again.";
        errorTitle = "Network Error";
      } else {
        errorMessage = error.message || errorMessage;
      }

      Swal.fire({
        icon: "error",
        title: errorTitle,
        text: errorMessage,
        confirmButtonColor: "#1f2937",
      });
    }
  };

  return (
    <div className="mt-6">
      <h1 className="font-bold text-xl mb-3 text-center">Login With</h1>
      <div className="flex flex-col gap-3">
        {/* Google Login Button */}
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        {/* GitHub Login Button */}
        <button
          onClick={handleGithub}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-900 text-white font-semibold border border-gray-900 rounded-md hover:bg-black transition-all duration-200 shadow-sm"
        >
          <svg
            aria-label="GitHub logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Social;
