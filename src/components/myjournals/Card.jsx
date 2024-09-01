import React from "react";
import myjocard from "../../styles/myjocard.css";
import goArrow from "../../assets/icons/goArrow.png";
function Card({ item, index }) {
  return (
    <div
      className="c-container"
      style={{
        marginLeft: index % 4 === 0 ? 0 : 32,
        width: window.innerWidth / 4 - 100,
        height: window.innerHeight / 2 + 100,
      }}
    >
      <div
        className="c-date d-flex justify-content-between"
        style={{ fontFamily: "Poppins", fontSize: 16, fontWeight: "600" }}
      >
        <div> Mon, 1 June</div>
        <img
          src={goArrow}
          alt="arrow"
          style={{ width: 24, height: 24, cursor: "Pointer" }}
        />
      </div>
      <hr />

      <div className="d-flex c-notes-c">
        <div
          className="c-notes "
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Notes:
        </div>
        <div
          className="c-notes-p"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          Lorem Ipsum is simply
        </div>
      </div>

      <div className="d-flex c-mistake-c">
        <div
          className="c-mistake"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Mistakes:
        </div>
        <div
          className="c-mistake-p"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          Lorem Ipsum is simply
        </div>
      </div>

      <div className="d-flex mb-9 c-lessions-c">
        <div
          className="c-lessions"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Lessons:
        </div>
        <div
          className="c-lessions-p"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          Lorem Ipsum is simply
        </div>
      </div>

      <hr />

      <div className="d-flex rules-rate">
        <div className="sec">
          <div
            style={{
              fontSize: 14,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
          >
            Rules Followed
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            80%
          </div>
        </div>

        <div className="sec">
          <div
            style={{
              fontSize: 14,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
          >
            Win rate
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            75%
          </div>
        </div>

        <div
          style={{
            fontSize: 14,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          <div>Profit</div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            7000
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
