import React from "react";
import "../../styles/mainsection.css";
import Attach from "./Attach";
import RichText from "./RichText";
import MyRule from "./MyRule";
import TradeLog from "./TradeLog";
import ProfitLossChart from "../charts/ProfitLossChart";
import WinChartRate from "../charts/WinChartRate";
import RulesChart from "../charts/RulesChart";
import TradesTaken from "../charts/TradesTaken"


function MainSection() {
  return (
    <div className="main-parent">
      <div className="main-header">
        <h1 className="main-welcome">Welcome back</h1>
        <div className="main-capital">
          <span>18:22 PM</span>
        </div>
      </div>

      <div className="main-date">
        <span >{"   "}</span>
        <span className="main-dateText">Monday, 31 May 2024</span>
        <span className="capital">Capital: ₹ 1,00,000</span>
      </div>

      <div className="today-my-rule-section">
        <div className="today-journal">
          <div className="today-journal-heading">
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
      <textarea className="note-input" placeholder="Type your notes here..."></textarea>
      <textarea className="note-input" placeholder="Type your mistakes here..."></textarea>
      <textarea className="note-input" placeholder="Type your lessons here..."></textarea>


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
