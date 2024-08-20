import React, { useState, useEffect, useContext } from "react";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
// import ImageSlider from './ImageSlider';
import "./style.css";
import MyContext from "../../context/MyContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithMobile from "./LoginWithMobile";
import { useNavigate } from "react-router-dom";

const images = [img1, img2, img3];

function LoginLayout({ children }) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container-fluid">
      <div className="row" id="bg">
        <div className="col-lg-6" id="left-side">
          {children}
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
            <p style={{ fontFamily: "Poppins", fontWeight: "400" }}>
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

export default LoginLayout;
