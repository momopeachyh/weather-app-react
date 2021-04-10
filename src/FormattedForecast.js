import React from "react";

export default function FormattedForecast(props) {
  function formatDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemp() {
    const maxTemp = props.data.temp.max;
    return Math.round(maxTemp);
  }

  function minTemp() {
    const minTemp = props.data.temp.min;
    return Math.round(minTemp);
  }

  return (
    <div className="FormattedForecast">
      <div className="Forecast-day">{formatDay()}</div>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        className="Forecast-icon"
        alt=""
      />
      <div className="Forecast-temp">
        <span className="Forecast-max">{maxTemp()}°</span>
        <span className="Forecast-min"> {minTemp()}°</span>
      </div>
    </div>
  );
}
