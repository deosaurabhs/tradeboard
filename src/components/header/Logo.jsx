import React, { useContext } from "react";
import "../../styles/logo.css";
import MyContext from "../../context/MyContext";
function Logo() {
  const { toggleSideBar } = useContext(MyContext);
  const handleToggleSidebar = () => {
    // document.body.classList.toggle("toggle-sidebar");
    toggleSideBar();
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="/" className="d-flex align-item-center logo">
        <img src="" alt="" />
        <span className="d-none d-lg-block">Tradeboard</span>
      </a>
      {/* <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSidebar}
      ></i> */}
    </div>
  );
}

export default Logo;
