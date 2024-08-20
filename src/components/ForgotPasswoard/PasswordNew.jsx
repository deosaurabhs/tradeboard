import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure you have axios installed

function PasswordNew() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Retrieve userId and token from localStorage
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        setError("User ID or token not found.");
        return;
      }

      // Make API call to reset the password
      const response = await axios.post(
        "http://localhost:5000/auth/reset-password",
        {
          userId,
          newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        // Password reset successful
        navigate("/passsignin");
      } else {
        setError(response.data.message || "Password reset failed.");
      }
    } catch (error) {
      setError("An error occurred while resetting the password.");
      console.error("Password reset error:", error);
    }
  };

  return (
    <div className="social-icons">
      <form onSubmit={handleSubmit}>
        <div className="otpsendgmail">
          <h1>Set a new password</h1>
          <p className="p4">
            Create a new password. Ensure it differs from previous ones for
            security
          </p>
          <label className="label">New Password</label>
          <input
            type="password"
            name="newPassword"
            className="vtext"
            placeholder="New Password"
            value={newPassword}
            onChange={handlePasswordChange}
            required
          />
          <label className="label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="vtext"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handlePasswordChange}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn6">
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordNew;
