import React, { useState } from "react";
import "./WeatherOverview.css";

export default function TodaysTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function ConvertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function ConvertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="todays-temp">
        <span className="temp-number">{Math.round(props.temp)}</span>
        <span className="temp-units">
          °C
          {""} | {""}
          <a className="fahrenheit" href="/" onClick={ConvertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="todays-temp">
        <span className="temp-number">
          {Math.round((props.temp * 9) / 5 + 32)}
        </span>
        <span className="temp-units">
          <a className="celsius" href="/" onClick={ConvertToCelsius}>
            °C
          </a>
          {""} | {""}
          °F
        </span>
      </div>
    );
  }
}
