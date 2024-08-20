import React, { useState } from "react";
import RuleSearchbar from "./RuleSearchbar";
import MyRuleListbar from "./MyRuleListbar";

function MyRule() {
  const [ruleList, setRuleList] = useState([{}, {}, {}, {}, {},{},{}]);
  return (
    <div className="my-rule">
      <RuleSearchbar />
      <MyRuleListbar ruleList={ruleList} />
    </div>
  );
}

export default MyRule;
