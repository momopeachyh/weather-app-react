import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Sat</div>
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            className="Forecast-icon"
            alt=""
          />
          <div className="Forecast-temp">
            <span>min°</span>
            <span>max°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
