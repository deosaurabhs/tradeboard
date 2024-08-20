import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginLayout from "../Login/LoginLayout";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
import { FcGoogle } from "react-icons/fc";
import "./style.css";

const images = [img1, img2, img3];

function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const fullPhoneNumber = `${countryCode}${phone}`;

    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        name,
        phone: fullPhoneNumber,
        email,
        password,
      });

      if (response.data.message === "User registered. Please verify OTP.") {
        // Save userId to localStorage
        localStorage.setItem("userId", response.data.userId);
        // Redirect to login page
        navigate("/login");
      }
    } catch (err) {
      setError("Registration failed");
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const Divider = () => (
    <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <div
        style={{
          flexGrow: 1,
          height: "2px",
          background:
            "linear-gradient(to right, rgba(343, 346, 348, 0), rgba(243, 246, 248, 1), rgba(343, 346, 348, 0))",
        }}
      ></div>
      <span
        style={{
          margin: "0 10px",
          whiteSpace: "nowrap",
          fontSize: "14px",
          color: "#888",
        }}
      >
        OR
      </span>
      <div
        style={{
          flexGrow: 1,
          height: "2px",
          background:
            "linear-gradient(to right, rgba(343, 346, 348, 0), rgba(243, 246, 248, 1), rgba(343, 346, 348, 0))",
        }}
      ></div>
    </div>
  );

  return (
    <LoginLayout>
      <div className="container-fluid">
        <div className="row" id="bg">
          <div className="col-lg-6" id="left-side">
            <form className="block" onSubmit={handleSubmit}>
              <div className="social-icons">
                <h1 className="h1sign">Sign up</h1>
                <p className="plsign">Please create an account</p>
                <button className="button" onClick={handleGoogleSignIn}>
                  <FcGoogle size={20} /> Sign up with Google
                </button>
                <Divider />
                <label className="label">Full Name</label>
                <input
                  type="text"
                  className="etext etext3"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="label">Email ID</label>
                <input
                  type="email"
                  className="etext etext3"
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label">Mobile Number</label>
                <div
                  className="flex"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="selector"
                    style={{ marginRight: "8px" }} // Adjust spacing between select and input
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <input
                    type="text"
                    className="etext2 flex-1"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ flexGrow: 1 }} // Ensure the input takes up remaining space
                  />
                </div>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="etext"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  className="etext"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}

                <div className="checkbox">
                  <input type="checkbox" />
                  <p>
                    By creating an account you agree to our{" "}
                    <a href="#terms">Terms & Conditions</a> and{" "}
                    <a href="#privacy">Privacy Policy</a>
                  </p>
                </div>

                <button type="submit" className="signup">
                  Sign up
                </button>
                <p className="signup-text">
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
