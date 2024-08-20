import React, { useContext } from "react";
import MyContext from "../../context/MyContext";
import "../../styles/tradelogcloseopen.css";

function TradeLogCloseOpen() {
  const { isTradeOpen, setIsTradeOpen } = useContext(MyContext);

  const changeTradeStatus = () => {
    setIsTradeOpen(!isTradeOpen);
  };

  return (
    <div className="d-flex justify-content-end">
      <div>
        <button
          className="trade-log-btn-l"
          onClick={changeTradeStatus}
          style={{
            backgroundColor: !isTradeOpen
              ? "rgba(29, 213, 148, 1)"
              : "rgba(246, 246, 246, 1)",
            color:!isTradeOpen?"white":"rgba(176, 176, 176, 1)"
          }}
        >
          <span>Closed Trade</span>
        </button>

        <button
          className="trade-log-btn-r"
          onClick={changeTradeStatus}
          style={{
            backgroundColor: isTradeOpen
              ? "rgba(29, 213, 148, 1)"
              : "rgba(246, 246, 246, 1)",
            color:isTradeOpen?"white":"rgba(176, 176, 176, 1)"
          }}
        >
          <span>Open Trade</span>
        </button>
      </div>
    </div>
  );
}

export default TradeLogCloseOpen;
