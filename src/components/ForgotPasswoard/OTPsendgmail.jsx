import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
// import ImageSlider from './ImageSlider';
import "./style2.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import GmailVerification from "./GmailVerification";
import PasswordNew from "./PasswordNew";

const images = [img1, img2, img3];

function OTPsendgmail() {
  const [isGmailVerificationVisible, setisGmailVerificationVisible] =
    useState(false);
  const [isLoginWithEmailVisible, setisLoginWithEmailVisible] = useState(true);

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
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

  const GmailVerificationMethod = () => {
    setisGmailVerificationVisible(true);
  };

  const backbtnMethod2 = () => {
    setisGmailVerificationVisible(false);
  };

  const backbtnMethod = () => {
    if (isGmailVerificationVisible) {
      setisGmailVerificationVisible(false);
    } else {
      navigate(-1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      OtpVerificationMethod();
    }
  };

  const OtpVerificationMethod = () => {
    navigate("/otpverification", { state: { isLoginWithMobileProps: false } });
  };

  return (
    <div className="container-fluid">
      <div className="row" id="bg">
        <div className="col-lg-6" id="left-side">
          <div className="backdiv" onClick={() => backbtnMethod()}>
            <img
              className="backbtn"
              src={require("../../assets/images/back-button.png")}
            />
          </div>
          {isGmailVerificationVisible ? (
            <GmailVerification />
          ) : (
            <>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="otpsendgmail">
                    <h1>Forgot Password?</h1>
                    <p className="p4" style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}>
                      Please enter your email to reset the password
                    </p>
                    <input
                      type="email"
                      className="vtext"
                      placeholder="Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <div style={{ color: "red", textAlign: "left",fontFamily:'Poppins' }}>
                        {errors.email}
                      </div>
                    )}
                    <button className="btn5" type="submit" style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}>
                      Send OTP
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
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
