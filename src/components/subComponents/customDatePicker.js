import DatePicker from "react-date-picker";
import React from "react";
import "./subComponentCss/customDatePicker.css";

const CustomDatePicker = props => {
  return (
    <div className="date-class">
      <div className="left-date-class">{props.dateName}</div>
      <DatePicker
        className="right-date-class"
        onChange={props.handleDateChange}
        value={props.date}
        calendarIcon={null}
        clearIcon={null}
      />
    </div>
  );
};
export default CustomDatePicker;
