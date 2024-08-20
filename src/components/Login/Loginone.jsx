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
import LoginLayout from "./LoginLayout";

const images = [img1, img2, img3];

function Loginone() {
  const [isLoginWithEmailVisible, setisLoginWithEmailVisible] = useState(false);
  const [isLoginWithMobileVisible, setisLoginWithMobileVisible] =
    useState(false);
  const [isSendOTPVisible, setSendOYPVisible] = useState(false);

  const navigate = useNavigate();
  const { choosedLoginOption, setChoosedLoginOption } = useContext(MyContext);
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
    //setisLoginWithEmailVisible(true);
    // setChoosedLoginOption(1);
    navigate("/loginwithemail");
  };

  const backbtnMethod = () => {
    // setisLoginWithEmailVisible(false);
    setChoosedLoginOption(3);
  };

  const loginwithmobileMethod = () => {
    //setisLoginWithMobileVisible(true);
    // setChoosedLoginOption(2);
    navigate("/loginwithmobile");
  };
  const backbtnMethod2 = () => {
    setChoosedLoginOption(3);
    // setisLoginWithMobileVisible(false);
  };

  const signUpMethod = () => {
    console.log("sign up clicked");
    navigate("/signUp");
    //localStorage.clear();
  };

  const choosedLoginOptions = (option) => {
    switch (option) {
      case 1:
        return (
          <>
            <div className="backdiv" onClick={() => backbtnMethod()}>
              <img
                className="backbtn"
                src={require("../../assets/images/back-button.png")}
              />
            </div>
            <LoginWithEmail />
          </>
        );
      case 2:
        return (
          <>
            <div className="backdiv" onClick={() => backbtnMethod2()}>
              <img
                className="backbtn"
                src={require("../../assets/images/back-button.png")}
              />
            </div>
            <LoginWithMobile isVisible={isSendOTPVisible} />
          </>
        );

      default:
        return (
          <form>
            <div className="social-icons">
              <h1>Log in to your account</h1>
              <p className="pl">Please select any one of them</p>
              <button className="btn">
                <img
                  src={require("../../assets/icons/search.png")}
                  width="15"
                  alt="Google"
                />{" "}
                Log in with Google
              </button>
              <button className="btn" onClick={() => loginwithemailMethod()}>
                <img
                  src={require("../../assets/icons/gmail.png")}
                  width="15"
                  alt="Email"
                />{" "}
                Log in with Email
              </button>
              <button className="btn" onClick={() => loginwithmobileMethod()}>
                <img
                  src={require("../../assets/icons/telephone-call.png")}
                  width="15"
                  alt="Mobile"
                />{" "}
                Log in with Mobile Number
              </button>
              <p
                className="signup-text"
                onClick={() => signUpMethod()}
                style={{
                  fontFamily: "Poppins"
                }}
              >
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </form>
        );
    }
  };

  return (
    <LoginLayout>
      <form>
        <div className="social-icons">
          <h1>Log in to your account</h1>
          <p className="pl">Please select any one of them</p>
          <button className="btn">
            <img
              src={require("../../assets/icons/search.png")}
              width="15"
              alt="Google"
            />{" "}
            Log in with Google
          </button>
          <button className="btn" onClick={() => loginwithemailMethod()}>
            <img
              src={require("../../assets/icons/gmail.png")}
              width="15"
              alt="Email"
            />{" "}
            Log in with Email
          </button>
          <button className="btn" onClick={() => loginwithmobileMethod()}>
            <img
              src={require("../../assets/icons/telephone-call.png")}
              width="15"
              alt="Mobile"
            />{" "}
            Log in with Mobile Number
          </button>
          <p className="signup-text"  style={{ fontSize: 20, fontFamily: "Poppins", fontWeight: "500" }}>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </form>
    </LoginLayout>
  );
}

export default Loginone;
