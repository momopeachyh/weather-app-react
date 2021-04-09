import React from "react";
import "./App.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();

  if (minute < 10) {
    return (
      <div className="FormattedDate">
        <h2>
          {day} {hour}:0{minute}
        </h2>
      </div>
    );
  } else {
    return (
      <div className="FormattedDate">
        <h2>
          {day} {hour}:0{minute}
        </h2>
      </div>
    );
  }
}
