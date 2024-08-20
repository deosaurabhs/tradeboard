import React from "react";

function RuleSearchbar() {
  return (
    <div className="my-rule-searchbar">
      <div className="my-rule-searchbar-heading">My Rule</div>
      <div className="my-rule-search-container">
        <input type="text" placeholder="Type rule here..." />
        <button>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default RuleSearchbar;
