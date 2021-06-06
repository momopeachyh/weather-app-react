import React from "react";
import "./WeatherOverview.css";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <div className="row">
        <div className="col-3">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt=""
            className="overviewIcon"
          />
        </div>
        <div className="col-3">
          <div className="todays-temp">
            <span className="temp-number">
              {Math.round(props.data.temperature)}
            </span>
            <span className="celsius">°C</span>
          </div>
        </div>
        <div className="col-6 d-none d-md-block">
          <h2 className="description">{props.data.description}</h2>
          <h2>Humidity: {props.data.humidity}%</h2>
          <h2>Wind: {props.data.wind} km/h</h2>
        </div>
      </div>
    </div>
  );
}
