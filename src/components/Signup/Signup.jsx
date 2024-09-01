import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
// import ImageSlider from './ImageSlider';
import "./style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../Login/LoginLayout";

const images = [img1, img2, img3];

function Signup() {
  const [isLoginWithEmailVisible, setisLoginWithEmailVisible] = useState(false);
  const [isLoginWithMobileVisible, setisLoginWithMobileVisible] =
    useState(false);
  const [isSendOTPVisible, setSendOYPVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getAsycData();
  }, []);
  const getAsycData = () => {
    const value = localStorage.getItem("myVariable");
    console.log("value", value);
    if (value == 123) {
      setisLoginWithEmailVisible(true);
    }
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const loginwithemailMethod = () => {
    // localStorage.setItem("myVariable", "123");
    setisLoginWithEmailVisible(true);
  };

  const backbtnMethod = () => {
    setisLoginWithEmailVisible(false);
  };

  const loginwithmobileMethod = () => {
    setisLoginWithMobileVisible(true);
  };

  const backbtnMethod2 = () => {
    setisLoginWithMobileVisible(false);
  };

  const Divider = () => {
    const dividerStyle = {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
    };

    const lineStyle = {
      flexGrow: 1,
      height: "2px",
      background:
        "linear-gradient(to right, rgba(343, 346, 348, 0), rgba(243, 246, 248, 1), rgba(343, 346, 348, 0))",
    };

    const textStyle = {
      margin: "0 10px",
      whiteSpace: "nowrap",
      fontSize: "14px",
      color: "#888",
    };

    return (
      <div style={dividerStyle}>
        <span style={lineStyle}></span>
        <span style={textStyle}><img className="img-fluid my-4" src={require("../../assets/images/OR.png")} /></span>
        <span style={lineStyle}></span>
      </div>
    );
  };

  const validate = () => {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!mobile) {
      errors.mobile = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile Number is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    console.log("hell0");

    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      localStorage.setItem("isLoggedIn", "1");
      navigate("/mainHome");
      console.log("Form submitted successfully");
      // Proceed with form submission logic
    }
  };

  return (
    <LoginLayout>
      <div className="container-fluid">
        <div className="row" id="bg">
          <div className="col-lg-6 pt-0" id="left-side">
            <form className="block pt-0" onSubmit={handleSubmit}>
              <div className="social-icons">
                <h1 className="h1sign">Sign up</h1>
                <p
                  className="plsign"
                  style={{
                    fontSize: 17,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                >
                  Please create an account
                </p>
                <button
                  className="button"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  <img
                    src={require("../../assets/icons/search.png")}
                    width="15px"
                    alt="Google"
                  />{" "}
                  Sign up with Google
                </button>
                <Divider />
                <input
                  type="text"
                  className="etext"
                  placeholder="Full Name"
                  style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && (
                  <div style={{ color: "red", textAlign: "left",fontFamily:'Poppins' }}>
                    {errors.fullName}
                  </div>
                )}
                <input
                  type="email"
                  className="etext"
                  placeholder="Email ID"
                  value={email}
                  style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div style={{ color: "red", textAlign: "left",fontFamily:'Poppins' }}>
                    {errors.email}
                  </div>
                )}
                <input
                  type="number"
                  className="etext"
                  placeholder="Mobile Number"
                  value={mobile}
                  style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
                  onChange={(e) => setMobile(e.target.value)}
                />
                {errors.mobile && (
                  <div style={{ color: "red", textAlign: "left",fontFamily:'Poppins' }}>
                    {errors.mobile}
                  </div>
                )}
                <input
                  type="password"
                  className="etext"
                  placeholder="Password"
                  value={password}
                  style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div style={{ color: "red", textAlign: "left",fontFamily:'Poppins' }}>
                    {errors.password}
                  </div>
                )}
                <input
                  type="password"
                  className="etext"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <div style={{ color: "red", textAlign: "left",fontFamily:'Poppins' }}>
                    {errors.confirmPassword}
                  </div>
                )}
                <label className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <p  style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400", textAlign: "left" }}>
                    By creating an account you agree to our{" "}
                    <a href="#terms">Terms & Conditions</a> and{" "}
                    <a href="#privacy">Privacy Policy</a>
                  </p>
                </label>
                <button
                  type="submit"
                  className="signup"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Sign up
                </button>
                <p
                  className="signup-text"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Already have an account? <a href="/login">Log in</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}

export default Signup;
