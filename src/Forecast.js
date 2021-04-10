import React, { useState } from "react";
import "./Forecast.css";
import FormattedForecast from "./FormattedForecast";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function getResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <FormattedForecast data={forecastData} />
      </div>
    );
  } else {
    const apiKey = "343320b5e251ee7c39260263367d8fb5";
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getResponse);

    return null;
  }
}
