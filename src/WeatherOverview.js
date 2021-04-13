import React from "react";

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
          <h2>{Math.round(props.data.temperature)}°C</h2>
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
