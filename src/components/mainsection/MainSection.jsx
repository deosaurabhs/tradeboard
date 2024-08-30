import React from "react";
import "../../styles/mainsection.css";
import Attach from "./Attach";
import RichText from "./RichText";
import MyRule from "./MyRule";
import TradeLog from "./TradeLog";
import ProfitLossChart from "../charts/ProfitLossChart";
import WinChartRate from "../charts/WinChartRate";
import RulesChart from "../charts/RulesChart";
import TradesTaken from "../charts/TradesTaken";

function MainSection() {
  return (
    <div className="main-parent">
      <div className="main-header">
        <h1
          className="main-welcome"
          style={{ fontSize: 24, fontWeight: "500", fontFamily: "Poppins" }}
        >
          Welcome back
        </h1>
        <div className="main-capital">
          <span
            style={{ fontSize: 24, fontWeight: "500", fontFamily: "Poppins" }}
          >
            18:22 PM
          </span>
        </div>
      </div>

      <div className="main-date">
        <div className="row">
          <div className="col-12 col-sm-3 col-md-4">        
            <span>{"   "}</span>
          </div>
          <div className="col-12 col-sm-5 col-md-4">
            <span
              className="main-dateText"
              style={{ fontSize: 18, fontWeight: "400", fontFamily: "Poppins" }}
            >
              Monday, 31 May 2024
            </span>
          </div>
          <div className="col-12 col-sm-4 col-md-4 text-center text-sm-end">
            <span
              className="capital"
              style={{ fontSize: 21, fontWeight: "500", fontFamily: "Poppins" }}
            >
              Capital: ₹ 1,00,000
            </span>
          </div>
        </div>
      </div>

      <div className="today-my-rule-section">
        <div className="today-journal">
          <div
            className="today-journal-heading"
            style={{ fontSize: 21, fontFamily: "Poppins", fontWeight: "500" }}
          >
            Today’s Journal <span>(Saving)</span>
          </div>
          {/* <input
            type="text"
            placeholder="Type your notes here"
            style={{
              paddingLeft: 24,
              paddingRight: 24,
              marginBottom: 12,
              width: "100%",
              // height: 140,
            }}
          />

          <input
            type="text"
            placeholder="Type your mistake here"
            style={{
              paddingLeft: 24,
              paddingRight: 24,
              marginBottom: 12,
              width: "100%",
              // height: 140,
            }}
          />

          <input
            type="text"
            placeholder="Type your lessons here"
            style={{
              paddingLeft: 24,
              paddingRight: 24,
              width: "100%",
              // height: 140,
            }}
          /> */}
          <div className="note-container">
            <textarea
              className="note-input"
              style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
              placeholder="Type your notes here..."
            ></textarea>
            <textarea
              className="note-input"
              style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
              placeholder="Type your mistakes here..."
            ></textarea>
            <textarea
              className="note-input"
              style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
              placeholder="Type your lessons here..."
            ></textarea>
          </div>
          <Attach />
        </div>
        <MyRule />
      </div>

      {/* <TradeLog /> */}
    </div>
  );
}

export default MainSection;
