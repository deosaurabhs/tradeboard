import React, { useContext, useState } from "react";
import "../../styles/sidebar.css";
import MyContext from "../../context/MyContext";
import CategoryIcon from "../../assets/images/Category.png";
import accountIcon from "../../assets/images/account.png";
import Account_partnerIcon from "../../assets/images/Account_Partner.png";
import performance_analyticsIcon from "../../assets/images/performance_analytics.png";
import DocumentIcon from "../../assets/images/Document.png";
import logoutIcon from "../../assets/images/logout.png";
import contactIcon from "../../assets/images/contact.png";
import lockIcon from "../../assets/images/lock.png";
import leftsideIcon from "../../assets/icons/left-side.png";
import rightsideIcon from "../../assets/icons/right-side.png";

import { BsGrid, BsPersonFill, BsPeopleFill } from "react-icons/bs";
import { ImFileText2 } from "react-icons/im";
import { FiBriefcase } from "react-icons/fi";

import diamondIcon from "../../assets/images/diamond.png";
import infoIcon from "../../assets/icons/info.png"

function Sidebar() {
  const {
    isLeftSideBarOpen,
    setIsLeftSideBarOpen,
    toggleLeftSideBar,
    toggleRightSideBar,
  } = useContext(MyContext);
  const [navOptions, setNavOptions] = useState([
    { name: "Dashboard", isSelected: true, icon: <BsGrid /> },
    { name: "My Journal", isSelected: false, icon: <ImFileText2 /> },
    {
      name: "Performance Analytics",
      isSelected: false,
      icon: <FiBriefcase />,
    },
    {
      name: "Accountability Partner",
      isSelected: false,
      icon: <BsPeopleFill />,
    },
    { name: "My Account", isSelected: false, icon: <BsPersonFill /> },
  ]);

  const onClickNavItem = (index) => {
    const newNavOptions = navOptions.map((it, idx) => {
      if (index === idx) {
        it.isSelected = true;
      } else {
        it.isSelected = false;
      }
      return it;
    });
    setNavOptions(newNavOptions);
  };

  const handleToggleSidebar = () => {
    toggleLeftSideBar();
    toggleRightSideBar();
  };

  return isLeftSideBarOpen ? (
    <aside
      style={{
        position: "relative",
        left: isLeftSideBarOpen ? 0 : -0,
        transition: "left 0.3s ease-in-out",
        backgroundColor: "white",
        height: "100%",
        paddingTop:"1.5rem"
        // width:"5rem" ,
      }}
      className="lay-sidebar"
    >
      <div
        className="position-absolute trade-log-table-table"
        style={{ top: "60%", right: -10, cursor: "pointer", zIndex: 999 }}
        onClick={() => toggleLeftSideBar()}
      >
        <img
          src={leftsideIcon}
          alt="left icon"
          style={{ width: 6, height: 12 }}
        />
      </div>

      <div>
        <ul className="dashboard-nav-container">
          {navOptions.map((item, index) => {
            return (
              <li
                onClick={() => onClickNavItem(index)}
                className="dashboard-item"
                style={{
                  backgroundColor: item.isSelected
                    ? "rgba(131, 69, 225, 1)"
                    : "#fff",
                }}
              >
                <a href="#">
                  {/* <img
                    src={item.icon}
                    alt=""
                    className="dashboard-icon"
                    style={{ color: item.isSelected ? "white" : "black" }}
                  /> */}
                  <div style={{ color: item.isSelected ? "white" : "black" }}>
                    {item.icon}
                  </div>
                  <span
                    style={{
                      color: item.isSelected ? "white" : "black",
                      fontSize: 14,
                      fontWeight: "400",
                      marginLeft: 14,
                    }}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="dashboard-upcoming-level-container">
          <div className="dashboard-upcoming-level">
            <div>
              <img src={diamondIcon} alt="Diamond" style={{ height: "5rem",marginBottom:"1rem" }} />
            </div>
            <p >
              Upcoming Level : <span>Pearl</span>
            </p>
            <div className="dashboard-upcoming-level-points">
              <img src={infoIcon} alt="info"  />
              <span>Points : 0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex  flex-column">
        <div className="d-flex  flex-column lock-container">
          <img src={lockIcon} alt="lock-icon" />
          <p>Upgrade to PRO for more features.</p>
          <button>
            <span>Upgrade</span>
          </button>
        </div>
        {/* <ul>
      <li className="lsidebar-logout">
        <img src={contactIcon} alt="contact" />
        <a>Contact support</a>
      </li>
      <li className="lsidebar-logout">
        <img src={logoutIcon} alt="logout" />
        <a>Logout</a>
      </li>
    </ul> */}
      </div>
    </aside>
  ) : (
    <aside
      className="position-relative "
      style={{
        position: "relative",
        //width: isLeftSideBarOpen ? 0 : -0,
        transition: "width 0.3s ease-in-out",
        backgroundColor: "white",
        height: "100%",
        width: "5rem",
        paddingTop:"1.5rem"

        //paddingTop: "4.5rem",
      }}
    >
      {isLeftSideBarOpen && (
        <div
          className="position-absolute trade-log-table-table"
          style={{ top: "50%", right: -10, cursor: "pointer", zIndex: 999 }}
          onClick={() => toggleLeftSideBar()}
        >
          <img
            src={leftsideIcon}
            alt="left icon"
            style={{ width: 6, height: 12 }}
          />
        </div>
      )}

      <div>
        <ul className="dashboard-nav-container">
          <div className="dashboard-item">
            <i
              className="bi bi-list icon"
              onClick={() => toggleLeftSideBar()}
            ></i>
          </div>
          {navOptions.map((item, index) => {
            return (
              <li
                onClick={() => onClickNavItem(index)}
                className="dashboard-item-sm "
                style={{
                  backgroundColor: item.isSelected
                    ? "rgba(131, 69, 225, 1)"
                    : "#fff",
                }}
              >
                <a
                  href="#"
                  style={{ color: item.isSelected ? "white" : "black" }}
                >
                  {/* <img
                    src={item.icon}
                    alt=""
                    className="dashboard-icon"
                    style={{ color: item.isSelected ? "white" : "black" }}
                  /> */}
                  {item.icon}
                  {/* <span
                    style={{
                      color: item.isSelected ? "white" : "black",
                      fontSize: 14,
                      fontWeight: "400",
                    }}
                  >
                    {item.name}
                  </span> */}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
