import React from "react";
import axios from "axios";

export default function Forecast(props) {
  return "chicago";

  function getForecast(response) {
    console.log(response);
  }

  const apiKey = "343320b5e251ee7c39260263367d8fb5";
  const units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(getForecast);
}
