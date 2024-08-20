import React from "react";
import selecticon from "../../assets/images/select.png";
import editicon from "../../assets/images/Edit.png";
import deleteicon from "../../assets/images/delete.png";
function RuleListItem({ ruleList, index }) {
  return (
    <div
      className="my-rule-listitem-heading"
      style={{
        borderBottomLeftRadius: index === ruleList.length - 1 ? 8 : 0,
        borderBottomRightRadius: index === ruleList.length - 1 ? 8 : 0,
      }}
    >
      <div className="my-rule-select">
        <img src={selecticon} alt="select icon" />
        <span style={{ fontSize: 14, fontWeight: "500" }}>
          Lorem Ipsum is simply dummy text
        </span>
      </div>
      <div className="my-rule-action">
        <img src={editicon} alt="edit" />
        <img src={deleteicon} alt="delete" />
      </div>
    </div>
  );
}

export default RuleListItem;
