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
          <tr>
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
          <tr>
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
        <div className="d-flex align-items-center trade-log-bottom-text">
          Today’s Profit :{" "}
          <span style={{ color: "rgba(14, 217, 145, 1)" }}> ₹ 1000</span>
        </div>
        <div className="d-flex align-items-center trade-log-bottom-text">
          Today’s Charges :{" "}
          <span style={{ color: "rgba(134, 77, 219, 1)" }}> ₹ 2000</span>
        </div>
        <div className="d-flex align-items-center trade-log-bottom-text">
          Today’s Loss :{" "}
          <span style={{ color: "rgba(244, 76, 96, 1)" }}> ₹ 1000</span>
        </div>
      </div>
    </div>
  );
}

export default TradeLogTable;
