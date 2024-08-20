import React, { useState, useEffect } from "react";
import PasswordNew from "./PasswordNew";
import "./style2.css";
import axios from "axios";
import LoginLayout from "../Login/LoginLayout";

function GmailVerification() {
  const [seconds, setSeconds] = useState(120); // Initial countdown value in seconds
  const [isPasswordNewVisible, setIsPasswordNewVisible] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState(""); // State to hold OTP input
  const [error, setError] = useState("");

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false); // Stop countdown when it reaches 0
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async () => {
    const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
    if (!userId) {
      setError("User ID not found.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/verify-otp",
        {
          otp,
          userId, // Include userId in the request payload
        }
      );
      if (response.status === 200) {
        // Save userId and token to localStorage from response
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("token", response.data.token);

        setIsPasswordNewVisible(true);
        localStorage.setItem("gmailVerification", "456");
      } else {
        setError(response.data.message || "OTP verification failed.");
      }
    } catch (error) {
      setError("An error occurred during OTP verification.");
      console.error("OTP verification error:", error);
    }
  };

  const PasswordNewMethod = async () => {
    // Optional: Add logic to handle resending OTP if needed
    try {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const response = await axios.post(
          "http://localhost:5000/auth/resend-otp",
          { userId }
        );
        if (response.status === 200) {
          setSeconds(120); // Reset countdown timer
          setIsActive(true);
        } else {
          setError("Failed to resend OTP.");
        }
      } else {
        setError("User ID not found.");
      }
    } catch (error) {
      setError("An error occurred while resending OTP.");
      console.error("Resend OTP error:", error);
    }
  };

  return (
    <LoginLayout>
      <>
        {isPasswordNewVisible ? (
          <PasswordNew />
        ) : (
          <div className="social-icons">
            <form>
              <div className="otpgmail">
                <h1>OTP Verification</h1>
                <p className="p4">
                  We have sent a 4-digit code to your registered email
                  Shu*********@gmail.com
                </p>
                <label className="label">Enter OTP</label>
                <input
                  type="number"
                  className="vtext"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={handleOtpChange}
                />
                {error && <p className="error">{error}</p>}
                <button
                  className="btn5"
                  onClick={handleVerifyOtp}
                  type="button"
                >
                  Verify OTP
                </button>
                <p className="resend-otp2">
                  <div className="time">{formatTime(seconds)}</div>
                  <div className="row">
                    <a href="#" onClick={PasswordNewMethod}>
                      Resend OTP
                    </a>
                  </div>
                </p>
              </div>
            </form>
          </div>
        )}
      </>
    </LoginLayout>
  );
}

export default GmailVerification;
