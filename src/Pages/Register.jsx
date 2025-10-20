import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import errorAnimation from "../../public/error.json";

const Register = () => {
  const { createUser, setUser, updateUserProfile, verifyEmail, logOut } =
    useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [showErrorAnimation, setShowErrorAnimation] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Validate name
    if (name.length < 3) {
      setNameError("The length of your name should be more than 3 characters");
      setShowErrorAnimation(true);
      setTimeout(() => setShowErrorAnimation(false), 3000);

      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Name must be at least 3 characters long",
        confirmButtonColor: "#1f2937",
      });
      return;
    } else {
      setNameError("");
    }

    // Validate password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setShowErrorAnimation(true);
      setTimeout(() => setShowErrorAnimation(false), 3000);

      Swal.fire({
        icon: "error",
        title: "Weak Password",
        html: `
          <p style="margin-bottom: 10px;">Password must contain:</p>
          <ul style="text-align: left; margin: 0 auto; display: inline-block;">
            <li>At least 6 characters</li>
            <li>One uppercase letter (A-Z)</li>
            <li>One lowercase letter (a-z)</li>
            <li>One number (0-9)</li>
            <li>One special character (@$!%*?&)</li>
          </ul>
        `,
        confirmButtonColor: "#1f2937",
      });
      return;
    }

    try {
      // Show loading
      Swal.fire({
        title: "Creating Account...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // Step 1: Create user
      const result = await createUser(email, password);
      console.log("User created:", result.user.uid);

      // Step 2: Update profile
      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });
      console.log("Profile updated");

      // Step 3: Send verification email
      await verifyEmail();
      console.log("Verification email sent");

      // Step 4: Update state
      setUser({ ...result.user, displayName: name, photoURL: photo });

      // Step 5: Show success message
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        html: `
          <p><strong>Welcome, ${name}!</strong></p>
          <p style="margin-top: 15px;">A verification email has been sent to:</p>
          <p style="color: #1f2937; font-weight: bold; margin: 10px 0;">${email}</p>
          <p style="margin-top: 15px; font-size: 14px;">Please check your inbox (and spam folder) and verify your email address before logging in.</p>
        `,
        confirmButtonColor: "#1f2937",
        confirmButtonText: "OK, Got it!",
        allowOutsideClick: false,
      }).then(async () => {
        // Step 6: Log out and redirect
        await logOut();
        navigate("/auth/login");
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Registration error:", error);
      setShowErrorAnimation(true);
      setTimeout(() => setShowErrorAnimation(false), 3000);

      // Handle specific errors
      let errorMessage = "Something went wrong. Please try again.";
      let errorTitle = "Registration Failed";

      if (error.code === "auth/email-already-in-use") {
        errorMessage =
          "This email is already registered. Please login or use a different email.";
        errorTitle = "Email Already Exists";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address. Please check and try again.";
        errorTitle = "Invalid Email";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak. Please use a stronger password.";
        errorTitle = "Weak Password";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage =
          "Network error. Please check your internet connection and try again.";
        errorTitle = "Network Error";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage =
          "Too many attempts. Please try again later or reset your password.";
        errorTitle = "Too Many Requests";
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
    <div className="bg-gray-100 flex justify-center items-center min-h-screen py-8">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Register your account</h2>
        <hr className="mb-6 border-gray-200" />

        {/* Error Animation */}
        {showErrorAnimation && (
          <div className="mb-4">
            <Lottie
              animationData={errorAnimation}
              loop={true}
              style={{ height: 150, width: 150, margin: "0 auto" }}
            />
          </div>
        )}

        <form onSubmit={handleRegister} className="text-left">
          {/* Name */}
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 mb-1 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          {nameError && (
            <p className="text-red-500 text-sm mb-4">{nameError}</p>
          )}

          {/* Photo URL */}
          <label
            htmlFor="photo"
            className="block text-sm font-semibold mb-2 mt-4"
          >
            Photo URL
          </label>
          <input
            type="url"
            name="photo"
            placeholder="Enter your photo URL (optional)"
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
              id="terms"
              className="mr-2 accent-gray-800 w-4 h-4"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Accept{" "}
              <span className="font-semibold text-gray-800">
                Terms & Conditions
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

          {/* Login Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already Have an Account?{" "}
            <Link
              to="/auth/login"
              className="text-red-500 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
