import React from "react";
import "../../styles/tradelogheader.css";
import add from "../../assets/images/add.png";
import importIcon from "../../assets/images/import.png";

function TradeLogHeader() {
  return (
    <div className="d-flex justify-content-between tradelog-header-header">
      <h2
        className="head"
        style={{ fontSize: 28, fontFamily: "Poppins", fontWeight: "500" }}
      >
        Trade Log
      </h2>
      <div className="d-flex align-items-center">
        <button className="trade-log-btn-a d-flex align-items-center">
          <img src={add} alt="" className="trade-log-header-img" />
          <span
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
          >
            Add Trade
          </span>
        </button>
        <button className="trade-log-btn-i d-flex align-items-center">
          <img src={importIcon} alt="" className="trade-log-header-img" />
          <span
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
          >
            Import Trade
          </span>
        </button>
      </div>
    </div>
  );
}

export default TradeLogHeader;
