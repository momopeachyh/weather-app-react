import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Sat</div>
            <img
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
              className="Forecast-icon"
              alt=""
            />
            <div className="Forecast-temp">
              <span>min°</span>
              <span>max°</span>
            </div>
          </div>
        </div>
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
