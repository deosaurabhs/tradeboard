import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
// import ImageSlider from './ImageSlider';
import "./style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import LoginLayout from "./LoginLayout";
import React, { useState } from "react";
const images = [img1, img2, img3];

function LoginWithEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newErrors, setErrors] = useState({ email: "", password: "" });

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const forgotpasswordMethod = () => {
    navigate("/OTPsendgmail");
  };

  const loginUpMethod = (e) => {
    e.preventDefault();
    const newError = {};

    if (!validateEmail(email)) {
      newError.email = "Invalid email address";
    } else {
      newError.email = "";
    }

    if (!validatePassword(password)) {
      newError.password =
        "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character";
    } else {
      newError.password = "";
    }

    setErrors(newError);

    if (newError.email === "" && newError.password === "") {
      // Submit the form
      console.log("Form submitted successfully");
      localStorage.setItem("isLoggedIn", "1");
      navigate("/mainHome");
    } else {
      console.log("Form is not submitted successfully", newError);
    }

    // localStorage.clear();
  };

  const signUpMethod = () => {
    console.log("sign up clicked");
    navigate("/signUp");
    // localStorage.clear();
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  return (
    <LoginLayout>
      <>
        <div
          className="backdiv"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            className="backbtn"
            src={require("../../assets/images/back-button.png")}
          />
        </div>
        <div>
          <form onSubmit={loginUpMethod}>
            <div className="email-form">
              <h1>Log in with Email</h1>
              <p
                className="p2"
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                Please enter your registered email and password
              </p>
              <input
                type="email"
                className="etext"
                placeholder="Email ID"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div
                style={{
                  textAlign: "left",
                  color: newErrors.email === "" ? "#000" : "red",
                  fontFamily: "Poppins",
                }}
              >
                {newErrors?.email}
              </div>

              <input
                type="password"
                className="etext"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                style={{
                  textAlign: "left",
                  color: newErrors.password === "" ? "#000" : "red",
                  fontFamily: "Poppins",
                }}
              >
                {newErrors?.password}
              </div>
              <p
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
                className="forgot-pass"
                onClick={() => forgotpasswordMethod()}
              >
                Forgot password?
              </p>
              <button
                type="submit"
                className="btn2"
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Log in
              </button>

              <p
                className="signup-text"
                // onClick={() => signUpMethod()}
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                Don't have an account? <a href="/signup">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </>
    </LoginLayout>
  );
}

export default LoginWithEmail;
