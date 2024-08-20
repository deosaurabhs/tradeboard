import React from "react";
import profileIcon from "../../assets/images/profile.png";
import bottomSideIcon from "../../assets/icons/bottom-side.png";
import "../../styles/navAvatar.css"

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
      <a
        href="#"
        className="nav-link nav-profile d-flex align-items-center pe-0"
        data-bs-toggle="dropdown"
      >
        <img
          src={profileIcon}
          className="profileDp"
          alt="profile"
          className="rounded-circle"
        />
        <span className=""style={{fontSize:16,fontFamily: 'Poppins',fontWeight: '500',}}>Json Taylor</span>

        <img
          src={bottomSideIcon}
          className="bottomSideIcon"
          alt="bottomicon"
          // className="rounded-circle"
        />
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
         
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
             Logout
            </span>
          </a>
        </li>
        <li>
            <hr className="dropdown-divider"/>
        </li>


        <li className="notification-item">
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
