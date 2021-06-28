import React from "react";
import "./WeatherOverview.css";
import TodaysTemp from "./TodaysTemp";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <div className="row">
        <div className="col">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt={props.data.description}
            className="overviewIcon img-fluid"
          />
        </div>
        <div className="col">
          <TodaysTemp temp={props.data.temperature} />
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
