import React from "react";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../Login/LoginLayout";
import "./style2.css";
import logo from "../../assets/icons/logo.jpg"; // Import the logo image

function PassSignin() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <LoginLayout>
      <div className="social-icons">
        <form>
          <div className="otpsendgmail">
            <img src={logo} alt="Logo" height={50} style={{marginBottom:10}}/> {/* Use the imported image */}
            <h1>Password Reset</h1>
            <p className="p4">
              Your password has been successfully changed, click below to log
              in.
            </p>
            <button className="btn7" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
}

export default PassSignin;
