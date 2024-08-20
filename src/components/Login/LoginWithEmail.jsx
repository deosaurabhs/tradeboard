import React, { useEffect, useState } from "react";
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

function LoginWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUserId, setToken } = useAuth(); // Destructure setUserId and setToken from useAuth

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    // Ensure the layout is fixed upon initial render or after any changes
    // Perform any setup or cleanup needed here
  }, []);

  const forgotPasswordMethod = () => {
    navigate("/OTPsendgmail");
  };

  const loginUpMethod = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      console.log(response.data); // Log the entire response

      if (response.data.message === "OTP sent. Please verify.") {
        // Set userId and token if provided
        setUserId(response.data.userId);
        setToken(response.data.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("token", response.data.token);

        navigate("/otpverification-email");
      } else if (response.data.token) {
        // Handle successful login case where OTP is not needed
        setUserId(response.data.userId);
        setToken(response.data.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("token", response.data.token);

        navigate("/mainHome");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Login failed");
    }
  };

  const signUpMethod = () => {
    navigate("/signUp");
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
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
        <form>
          <div className="email-form">
            <h1>Log in with Email</h1>
            <p className="p2">
              Please enter your registered email and password
            </p>
            <label className="label">Email ID</label>
            <input
              type="email"
              className="etext"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="etext"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <p className="forgot-pass" onClick={forgotPasswordMethod}>
              Forgot password?
            </p>
            <button onClick={loginUpMethod} className="btn2" type="button">
              Log in
            </button>
            <p className="signup-text">
              Don't have an account?{" "}
              <a href="/signup" onClick={signUpMethod}>
                Sign up
              </a>
            </p>
          </div>
        </form>
      </>
    </LoginLayout>
  );
}

export default LoginWithEmail;
