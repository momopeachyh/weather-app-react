import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="forecast-wrapper">
        <div className="row forecast" id="forecast">
          <div class="col">
            <h3>Sat</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              className="forecast"
              alt=""
            />
            <h3>55°</h3>
          </div>

          <div class="col">
            <h3>Sat</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              id="weather-icon"
              className="forecast"
              alt=""
            />
            <h3>55°</h3>
          </div>

          <div class="col">
            <h3>Sat</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              id="weather-icon"
              className="forecast"
              alt=""
            />
            <h3>55°</h3>
          </div>

          <div class="col">
            <h3>Sat</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              id="weather-icon"
              className="forecast"
              alt=""
            />
            <h3>55°</h3>
          </div>

          <div class="col">
            <h3>Sat</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              id="weather-icon"
              className="forecast"
              alt=""
            />
            <h3>55°</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
