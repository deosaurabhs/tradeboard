import React, { useEffect, useContext } from "react";
import "../../styles/tradelogtable.css";
import editicon from "../../assets/images/Edit.png";
import deleteicon from "../../assets/images/delete.png";
import bottomsideIcon from "../../assets/icons/bottom-side.png";
import MyContext from "../../context/MyContext";

function TradeLogTable() {
  const { toggleBottomSideBar, isBottomSideBarOpen } = useContext(MyContext);
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <table className="trade-table">
        <thead>
          <tr className="tradelog">
            <th>Date-Time</th>
            <th>Instrument Name</th>
            <th>Quantity </th>
            <th>Buying Price </th>
            <th>Selling Price </th>
            <th>Charges </th>
            <th>Brokerage</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr className="tradelog">
            <td>24-5-2024, 10:30:25</td>
            <td>Tata Motor</td>
            <td>50</td>
            <td>₹ 296</td>
            <td>₹ 500</td>
            <td>₹ 12</td>
            <td>₹ 12</td>
            <td>
              <div className="trade-log-closed">closed</div>
            </td>

            <td>
              <div className="d-flex flex-row align-items-center">
                <button className="trade-log-table-btn">
                  <img src={editicon} alt="edit" />
                </button>

                <button className="trade-log-table-btn">
                  <img src={deleteicon} alt="delete" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center trade-log-bottom">
        <div
          className="d-flex align-items-center trade-log-bottom-text green-bg"
          style={{ fontSize: 20, fontFamily: "Poppins", fontWeight: "400" }}
        >
          Today’s Profit :{" "}
          <span
            style={{
              color: "rgba(14, 217, 145, 1)",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            {" "}
            ₹ 1000
          </span>
        </div>
        <div
          className="d-flex align-items-center trade-log-bottom-text violet-bg"
          style={{ fontSize: 20, fontFamily: "Poppins", fontWeight: "400" }}
        >
          Today’s Charges :{" "}
          <span
            style={{
              color: "rgba(14, 217, 145, 1)",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            {" "}
            ₹ 2000
          </span>
        </div>
        <div
          className="d-flex align-items-center trade-log-bottom-text red-bg"
          style={{ fontSize: 20, fontFamily: "Poppins", fontWeight: "400" }}
        >
          Today’s Loss :{" "}
          <span
            style={{
              color: "rgba(14, 217, 145, 1)",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            {" "}
            ₹ 1000
          </span>
        </div>
      </div>
    </div>
  );
}

export default TradeLogTable;
