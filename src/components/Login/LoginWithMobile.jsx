import React, { useState } from "react";
import axios from "axios";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginLayout from "./LoginLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const images = [img1, img2, img3];

function LoginWithMobile() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUserId, setToken } = useAuth();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleMobileChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSendOTP = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        phone: mobileNumber,
        password: password,
      });

      console.log("Server response:", response.data);

      if (response.data.message === "OTP sent. Please verify.") {
        const { userId, token } = response.data;

        localStorage.setItem("userId", userId);
        localStorage.setItem("token", token);

        setUserId(userId); // Now correctly defined
        setToken(token); // Correctly defined

        navigate("/otpverification");
      } else {
        setError("Unexpected response from server");
      }
    } catch (err) {
      console.error(
        "Login error:",
        err.response ? err.response.data : err.message
      );
      setError("Failed to send OTP");
    }
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
            src={require("../../assets/images/back-button (1).png")}
            alt="Back"
          />
        </div>
        <form>
          <div className="mobile-form">
            <h1>Log in with Mobile Number</h1>
            <p className="p3">
              Please enter your registered mobile number and password
            </p>
            <label className="label">Mobile Number</label>
            <input
              type="text"
              className="mtext"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleMobileChange}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="mtext"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button className="btn3" type="button" onClick={handleSendOTP}>
              Send OTP
            </button>
            <p className="signup-text">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </form>
      </>
    </LoginLayout>
  );
}

export default LoginWithMobile;
