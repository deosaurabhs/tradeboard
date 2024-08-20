import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/customCalendar.css";
import dateTypeData from "../../data/dateTypeData.json";

const CalendarChart = () => {
  const [value, setValue] = useState(new Date());
  const [dateTypeMap, setDateTypeMap] = useState({});

  useEffect(() => {
    setDateTypeMap(dateTypeData);
  }, []);

  const tileClassName = ({ date, view }) => {
    console.log("view: ", date.toISOString().split("T")[0]);
    if (view === "month") {
      const dateStr = date.toISOString().split("T")[0];
      // console.log("bbnn : ", dateTypeMap[dateStr]);
      return dateTypeMap[dateStr] || null;
    }
  };

  // const matchColor(matchDate){
  //   switch (matchDate) {
  //     case "today":
        
  //       return "rgba(160, 115, 240, 1)"
    
  //     default:
  //         return "rgba(231, 231, 231, 1)"
  //   }
  // }

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={tileClassName}
        style={{ boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.08);" }}
      />

      <div className="calendar-tilecolor-container">
        <div className="calendar-center">
          <div className="calendar-today" />
          <span className="calendar-text-color">Today</span>
        </div>
        <div className="calendar-center">
          <div className="calendar-profit"></div>
          <span className="calendar-text-color">Profit</span>
        </div>
        <div className="calendar-center">
          <div className="calendar-loss"></div>
          <span className="calendar-text-color">Loss</span>
        </div>
        <div className="calendar-center">
          <div className="calendar-holiday"></div>
          <span className="calendar-text-color">Holiday</span>
        </div>
        <div className="calendar-center">
          <div className="calendar-weekend"></div>
          <span className="calendar-text-color">Weekend</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarChart;
