import React, { useState } from "react";
import axios from "axios";
import City from "./City";
import FormattedDate from "./FormattedDate";
import WeatherOverview from "./WeatherOverview";
import "./App.css";

export default function SearchWeather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function showWeather(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  function Search() {
    const apiKey = "343320b5e251ee7c39260263367d8fb5";
    const units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function findLocation(position) {
    const apiKey = "343320b5e251ee7c39260263367d8fb5";
    const latitude = position.coords.latitude;
    const longitude = position.coords.latitude;
    const units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findLocation);
  }

  if (weatherData.loaded) {
    return (
      <div className="SearchWeather">
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
                className="btn form-control shadow-sm geolocation"
                onClick={getPosition}
              >
                <i className="fas fa-location-arrow"></i>
              </button>
            </div>
          </div>
        </form>
        <City city={weatherData.city} />
        <FormattedDate date={weatherData.date} />
        <WeatherOverview data={weatherData} />
      </div>
    );
  } else {
    Search();
    return "loading";
  }
}
