import React from "react";
import "../../styles/myrulelistbar.css";
import selecticon from "../../assets/images/select.png";
import RuleListItem from "./RuleListItem";

function MyRuleListbar({ ruleList }) {
  return (
    <>
      <div className="my-rule-list-heading">
        <div className="my-rule-select">
          <img src={selecticon} alt="select icon" />
          <span>Rules</span>
        </div>
        <div>
          <span>Action</span>
        </div>
      </div>
      <div style={{height:"16rem",overflow: 'auto',}}>
      {ruleList.map((item, index) => {
        return <RuleListItem ruleList={ruleList} index={index}/>;
      })}
      </div>
    </>
  );
}

export default MyRuleListbar;
