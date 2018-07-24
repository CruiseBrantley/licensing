import DatePicker from "react-date-picker";
import React from "react";
import "./subComponentCss/customDatePicker.css";

const CustomDatePicker = props => {
  return (
    <div className="date-class">
      <div className="left-date-class">{props.dateName}</div>
      <DatePicker
        className="right-date-class"
        onChange={e => {
          e.target.name = props.name;
          props.handleDateChange(e);
        }}
        value={props.date}
        name={props.name}
        calendarIcon={null}
        clearIcon={null}
      />
    </div>
  );
};
export default CustomDatePicker;
