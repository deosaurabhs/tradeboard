import React from "react";
import myjocard from "../../styles/myjocard.css";
function Card({ item, index }) {
  console.log("index: ", index % 3 == 2);
  console.log("index: ", index);

  return (
    <div
      className="c-container"
      style={{
        marginLeft: index % 4 === 0 ? 0 : 32,
        width: window.innerWidth / 4 - 100,
        height: window.innerHeight / 2 + 60,
      }}
    >
      <div className="c-date">Mon, 1 June</div>
      <hr />

      <div className="d-flex c-notes-c">
        <div
          className="c-notes "
          style={{ fontSize: 16, color: "rgba(28, 29, 34, 1)" }}
        >
          Notes:
        </div>
        <div
          className="c-notes-p"
          style={{ fontSize: 16, color: "rgba(83, 84, 92, 1)" }}
        >
          Lorem Ipsum is simply
        </div>
      </div>

      <div className="d-flex c-mistake-c">
        <div
          className="c-mistake"
          style={{ fontSize: 16, color: "rgba(28, 29, 34, 1)" }}
        >
          Mistakes:
        </div>
        <div
          className="c-mistake-p"
          style={{ fontSize: 16, color: "rgba(83, 84, 92, 1)" }}
        >
          Lorem Ipsum is simply
        </div>
      </div>

      <div className="d-flex mb-9 c-lessions-c">
        <div
          className="c-lessions"
          style={{ fontSize: 16, color: "rgba(28, 29, 34, 1)" }}
        >
          Lessons:
        </div>
        <div
          className="c-lessions-p"
          style={{ fontSize: 16, color: "rgba(83, 84, 92, 1)" }}
        >
          Lorem Ipsum is simply
        </div>
      </div>

      <hr />

      <div className="d-flex">
        <div>
          <div style={{ fontSize: 14, color: "rgba(28, 29, 34, 1)" }}>
            Rules Followed
          </div>
          <div>80%</div>
        </div>

        <div style={{ fontSize: 14, color: "rgba(28, 29, 34, 1)",marginRight: 35,marginLeft: 35, }}>
          <div>Win rate</div>
          <div>75%</div>
        </div>

        <div style={{ fontSize: 14, color: "rgba(28, 29, 34, 1)" }}>
          <div>Profit</div>
          <div>7000</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
