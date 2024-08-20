import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginLayout from "./LoginLayout";
import { useAuth } from "../../context/AuthContext"; // Import the useAuth hook
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
import "./style.css";

const images = [img1, img2, img3];

function OTPVerificationemail() {
  const [seconds, setSeconds] = useState(120); // Initial countdown value in seconds
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState(""); // State to store OTP input
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate();
  const { userId } = useAuth(); // Retrieve userId from context

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
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



  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/verify-otp",
        {
          otp,
          userId,
        }
      );

      console.log("Response:", response.data); // Debug response
      if (response.data.message === "OTP verified successfully") {
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("token", response.data.token); // Optionally store the token
        navigate("/mainHome");
      } else {
        setError("Invalid OTP");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err); // Debug error
      setError("Error verifying OTP");
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
            src={require("../../assets/images/back-button (1).png")}
            alt="Back"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="otpver">
            <h1>OTP Verification</h1>
            <p className="p3">
              We have sent a 4-digit code to your registered mobile number
              *******835
            </p>
            <label className="label">Enter OTP</label>
            <input
              type="number"
              className="vtext"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button className="btn4" type="submit">
              Verify OTP
            </button>
            <p className="resend-otp">
              <div className="time">{formatTime(seconds)}</div>
                <a href="#">Resend OTP</a>
            </p>
          </div>
        </form>
      </>
    </LoginLayout>
  );
}

export default OTPVerificationemail;
