import React, { useState } from "react";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
import "./style2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const images = [img1, img2, img3];

function OTPsendgmail() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendOTP = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/forgot-password",
        { email }
      );

      if (response.status === 200) {
        // Save userId to localStorage
        localStorage.setItem("userId", response.data.userId); // Assuming response contains userId
        navigate("/mail-verification"); // Navigate to OTP verification page
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError("Failed to send OTP. Please try again.");
    }
  };

  const backbtnMethod = () => {
    navigate(-1);
  };

  return (
    <div className="container-fluid">
      <div className="row" id="bg">
        <div className="col-lg-6" id="left-side">
          <div className="backdiv" onClick={() => backbtnMethod()}>
            <img
              className="backbtn"
              src={require("../../assets/images/back-button (1).png")}
              alt="Back"
            />
          </div>
          <div className="social-icons">
            <form>
              <div className="otpsendgmail">
                <h1>Forgot Password?</h1>
                <p className="p4">
                  Please enter your email to reset the password
                </p>
                <label className="label">Email ID</label>
                <input
                  type="email"
                  className="vtext"
                  placeholder="Email ID"
                  value={email}
                  onChange={handleEmailChange}
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button className="btn5" type="button" onClick={handleSendOTP}>
                  Send OTP
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6" id="right-side">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>

          <div className="text">
            <h3>Welcome to Tradeboard! 👋</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPsendgmail;
