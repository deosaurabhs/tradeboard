import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
// import ImageSlider from './ImageSlider';
import "./style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useLocation } from "react-router-dom";
import LoginLayout from "../Login/LoginLayout";
const images = [img1, img2, img3];

// function App() {
//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//   };

function OTPVerification({ props }) {
  const location = useLocation();
  const state = location.state || {};
  const [seconds, setSeconds] = useState(120); // Initial countdown value in seconds
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  useEffect(() => {
    console.log("route : ", state);

    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const resetTimer = () => {
    setSeconds(120); // Reset to initial value
    setIsActive(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const verifyOtp = () => {
    localStorage.setItem("isLoggedIn", "1");
    navigate("/mainHome");
  };

  const validateOtp = (otp) => {
    return /^\d{4}$/.test(otp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!otp) {
      errors.otp = "OTP is required";
    } else if (!validateOtp(otp)) {
      errors.otp = "Invalid OTP. It must be a 4-digit number";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Call your PasswordNewMethod here
      VerifyOtpMethod();
    }
  };

  const VerifyOtpMethod = () => {
    if (state.isLoginWithMobileProps) {
      localStorage.setItem("isLoggedIn", "1");
      navigate("/mainHome");
    } else {
      navigate("/passwordnew");
    }
  };

  return (
    <LoginLayout className="social-icons">
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
          <form onSubmit={handleSubmit}>
            <div className="otpgmail">
              <h1>OTP Verification</h1>
              <p
                className="p4"
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                We have sent a 4-digit code to your registered email
                Shu*********@gmail.com
              </p>
              <input
                type="number"
                className="vtext"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {errors.otp && (
                <div style={{ color: "red", textAlign: "left" }}>
                  {errors.otp}
                </div>
              )}
              <button
                className="btn5"
                type="submit"
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Verify OTP
              </button>
              <p className="resend-otp2">
                <div className="time">{formatTime(seconds)}</div>
                <div
                  className="row"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  <a href="#">:Resend OTP</a>
                </div>
              </p>
            </div>
          </form>
        </div>
      </>
    </LoginLayout>
  );
}

export default OTPVerification;
