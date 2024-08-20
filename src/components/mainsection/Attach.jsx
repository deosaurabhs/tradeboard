import React from "react";
import attachIcon from "../../assets/images/attach.png";
import closeIcon from "../../assets/images/close.png";

function Attach() {
  return (
    <div className="today-journal-attach">
      <div className="attach-container">
        <img src={attachIcon} alt="Attach icon" className="attach-icon" />
        <span>Attach</span>
      </div>
      {/* <div className="clear-container">
        <div className="close">
          <img src={closeIcon} alt="Attach icon" className="attach-icon" />
        </div>
        <span>Clear all</span>
      </div> */}
    </div>
  );
}

export default Attach;
