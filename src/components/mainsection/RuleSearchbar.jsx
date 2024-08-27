import React from "react";
import add from "../../assets/images/add.png";

function RuleSearchbar() {
  return (
    <div className="my-rule-searchbar">
      <div
        className="my-rule-searchbar-heading"
        style={{ fontSize: 21, fontFamily: "Poppins", fontWeight: "500", textAlign: "left" }}
      >
        My Rules
      </div>
      {/* <div className="my-rule-search-container">
        <input
          type="text"
          placeholder="Type rule here..."
          style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
        />
        <button>
          <span
            style={{ fontSize: 14, fontFamily: "Poppins", fontWeight: "400" }}
          >
            Add
          </span>
        </button>
      </div> */}
      <input
          type="text"
          placeholder="Search rules"
          style={{ 
            fontSize: 16, 
            fontFamily: "Poppins", 
            fontWeight: "500", 
            padding: "5px 20px",
            width: "200px",
            height: "40px",
            borderRadius: "11px",
            border: "1px solid #E7E7EA",
            marginRight: "15px" }}
        />
        <button>
          <span
            style={{ fontSize: 14, fontFamily: "Poppins", fontWeight: "400" }}
          >
            <img src={add} alt="" className="trade-log-header-img" /> Add Rules
          </span>
        </button>      
    </div>
  );
}

export default RuleSearchbar;
