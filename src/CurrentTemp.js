import React, { useState } from "react";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentTemp">
        <span className="temp">{Math.round(props.celsius)}°</span>
        <span className="conversion">
          <a href="/" onClick={showCelsius}>
            C
          </a>
          |
          <a href="a" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemp">
        <span className="temp">
          {Math.round((props.celsius * 9) / 5 + 32)}°
        </span>
        <span className="conversion">
          <a href="/" onClick={showCelsius}>
            C
          </a>
          |
          <a href="a" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  }
}
