import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import LoginLayout from "./LoginLayout";
import "./style.css"; // Import the CSS file

function Loginone() {
  const navigate = useNavigate();
  const { setChoosedLoginOption } = useContext(MyContext); // Access context

  const handleGoogleLogin = async () => {
    setChoosedLoginOption("Google"); // Set the chosen login option
    window.location.href = "http://localhost:5000/auth/google";
  };

  const loginWithEmail = () => {
    setChoosedLoginOption("Email"); // Set the chosen login option
    navigate("/loginwithemail");
  };

  const loginWithMobile = () => {
    setChoosedLoginOption("Mobile"); // Set the chosen login option
    navigate("/loginwithmobile");
  };

  const signUp = () => {
    navigate("/signup");
  };

  useEffect(() => {
    // Check for authentication token in URL (for Google OAuth callback)
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      navigate("/dashboard"); // Redirect to dashboard or home page
    }
  }, [navigate]);

  return (
    <LoginLayout>
      <form>
        <div className="social-icons">
          <h1>Log in to your account</h1>
          <p className="pl">Please select any one of them</p>
          <button type="button" className="butn" onClick={handleGoogleLogin}>
            <img
              src={require("../../assets/icons/search.png")}
              width="15"
              alt="Google"
            />{" "}
            Log in with Google
          </button>
          <button type="button" className="butn" onClick={loginWithEmail}>
            <img
              src={require("../../assets/icons/gmail.png")}
              width="15"
              alt="Email"
            />{" "}
            Log in with Email
          </button>
          <button type="button" className="butn" onClick={loginWithMobile}>
            <img
              src={require("../../assets/icons/telephone-call.png")}
              width="15"
              alt="Mobile"
            />{" "}
            Log in with Mobile Number
          </button>
          <p className="signup-text">
            Don't have an account?{" "}
            <a href="/signup" onClick={signUp}>
              Sign up
            </a>
          </p>
        </div>
      </form>
    </LoginLayout>
  );
}

export default Loginone;
