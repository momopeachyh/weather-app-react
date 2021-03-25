import React from "react";
import CurrentTemp from "./CurrentTemp";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <div className="row">
        <div className="col-3">
          <img
            className="col-3"
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt=""
            className="header"
          />
        </div>
        <div className="col-3">
          <CurrentTemp className="col-3" celsius={props.data.temperature} />
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
