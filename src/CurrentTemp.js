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
      <div>
        <span className="CurrentTemp">
          {Math.round(props.celsius)}°
          <span className="conversion">
            {" "}
            C|
            <a href="a" onClick={showFahrenheit}>
              F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="CurrentTemp">
          {Math.round((props.celsius * 9) / 5 + 32)}°
          <span className="conversion">
            <a href="/" onClick={showCelsius}>
              C
            </a>
            |F
          </span>
        </span>
      </div>
    );
  }
}
