import React from "react";
import "./App.css";

export default function Date() {
  let date = {
    weekDay: "Friday",
    time: "12:50",
  };

  return (
    <div className="Date">
      <h2>
        <span>
          {date.weekDay} {date.time}
        </span>
      </h2>
    </div>
  );
}
