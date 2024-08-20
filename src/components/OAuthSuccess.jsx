import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setToken } = useAuth();

useEffect(() => {
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  if (token) {
    setToken(token); // Set token in context
    localStorage.setItem("token", token); // Store token in localStorage
    console.log("Token received and stored:", token); // Debugging info
    navigate("/mainHome"); // Redirect to the main home page
  } else {
    console.error("No token found in URL");
    navigate("/login"); // Redirect to login if no token
  }
}, [location.search, navigate, setToken]);


  return <div>Loading...</div>;
};

export default OAuthSuccess;
