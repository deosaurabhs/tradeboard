import React from "react";
import { useAuth } from "../../context/AuthContext"; // Adjust the import path as needed
import profileIcon from "../../assets/images/profile.png";
import bottomSideIcon from "../../assets/icons/bottom-side.png";
import "../../styles/navAvatar.css";
import { useNavigate } from "react-router-dom";

function NavAvatar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Adjust the path as needed
  };

  return (
    <li className="nav-item dropdown pe-3">
      <a
        href="#"
        className="nav-link nav-profile d-flex align-items-center pe-0"
        data-bs-toggle="dropdown"
      >
        <img
          src={profileIcon}
          className="profileDp rounded-circle"
          alt="profile"
        />
        <span className="">Json Taylor</span>

        <img src={bottomSideIcon} className="bottomSideIcon" alt="bottomicon" />
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          <a href="#" onClick={handleLogout}>
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              Logout
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          {/* Example notification item */}
          {/* <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit?</p>
            <p>38 min. ago</p>
          </div> */}
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
