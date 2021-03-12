import React from "react";
import "./App.css";

export default function Overview() {
  let weatherData = {
    temp: 19,
    description: "Windy",
    humidity: 10,
    wind: 10,
  };

  return (
    <div className="Overview">
      <div className="row">
        <div className="col-6">
          <div className="current-temp">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              className="header"
            />
            <span className="todays-temp">{weatherData.temp}°</span>
            <span className="temp-conversion">
              <a href="#" className="active">
                C
              </a>
              |<a href="/">F</a>
            </span>
          </div>
        </div>
        <div className="col-6 ">
          <h2>{weatherData.description}</h2>
          <h2>Humidity: {weatherData.humidity}%</h2>
          <h2>Wind: {weatherData.wind} km/h</h2>
        </div>
      </div>
    </div>
  );
}
