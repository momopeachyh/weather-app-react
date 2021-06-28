import React, { useState } from "react";
import "./WeatherOverview.css";

export default function WeatherOverview(props) {
  const [temp, setTemp] = useState(Math.round(props.data.temperature));

  function ShowCelsius(e) {
    e.preventDefault();
    setTemp(Math.round(props.data.temperature));
  }

  function ShowFahrenheit(e) {
    e.preventDefault();
    setTemp((temp * 9) / 5 + 32);
  }

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
          <div className="todays-temp">
            <span className="temp-number">{temp}</span>
            <span className="temp-units">
              <a className="celsius" href="/" onClick={ShowCelsius}>
                °C
              </a>
              {""} {""}
              <a className="fahrenheit" href="/" onClick={ShowFahrenheit}>
                °F
              </a>
            </span>
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
