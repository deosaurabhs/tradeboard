import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";

function MyState({ children }) {
  const [isLeftSideBarOpen, setIsLeftSideBarOpen] = useState(true);
  const [isRightSideBarOpen, setIsRightSideBarOpen] = useState(true);
  const [isBottomSideBarOpen, setIsBottomSideBarOpen] = useState(true);
  const [isTradeOpen, setIsTradeOpen] = useState(false);
  const [choosedLoginOption, setChoosedLoginOption] = useState(3);
  const [isOTPVerificationVisible, setisOTPVerificationVisible] =
    useState(false);

  const toggleLeftSideBar = () => {
    setIsLeftSideBarOpen(!isLeftSideBarOpen);
  };

  const toggleRightSideBar = () => {
    setIsRightSideBarOpen(!isRightSideBarOpen);
  };

  const toggleBottomSideBar = () => {
    setIsBottomSideBarOpen(!isBottomSideBarOpen);
  };

  return (
    <MyContext.Provider
      value={{
        isLeftSideBarOpen,
        isRightSideBarOpen,
        isBottomSideBarOpen,
        toggleRightSideBar,
        toggleBottomSideBar,
        toggleLeftSideBar,
        isTradeOpen,
        setIsTradeOpen,
        choosedLoginOption,
        setChoosedLoginOption,
        isOTPVerificationVisible, setisOTPVerificationVisible
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
