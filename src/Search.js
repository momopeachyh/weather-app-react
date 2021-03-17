import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  const [city, setCity] = useState(null);

  function searchCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showWeather(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "343320b5e251ee7c39260263367d8fb5";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function findLocation(position) {
    const apiKey = "343320b5e251ee7c39260263367d8fb5";
    const latitude = position.coords.latitude;
    const longitude = position.coords.latitude;
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findLocation);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
              className="search-bar form-control shadow-sm"
              onChange={searchCity}
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn form-control shadow-sm search"
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn form-control shadow-sm"
              onClick={getPosition}
            >
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
