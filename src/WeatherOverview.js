import React from "react";
import "./App.css";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <div className="row">
        <div className="col-6">
          <div className="current-temp">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              className="header"
            />
            <span className="todays-temp">
              {Math.round(props.data.temperature)}°
            </span>
            <span className="temp-conversion">
              <span className="active">C</span>|<span>F</span>
            </span>
          </div>
        </div>
        <div className="col-6 ">
          <h2 className="description">{props.data.description}</h2>
          <h2>Humidity: {props.data.humidity}%</h2>
          <h2>Wind: {props.data.wind} km/h</h2>
        </div>
      </div>
    </div>
  );
}
