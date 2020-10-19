import React, { useState } from "react";
import ForecastRow from "./ForecastRow";
import axios from "axios";
import "./Forecast.css";

export default function ForecastIntro(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="ForecastIntro row">
        <ForecastRow data={forecast.list[0]} />
        <ForecastRow data={forecast.list[1]} />
        <ForecastRow data={forecast.list[2]} />
        <ForecastRow data={forecast.list[3]} />
        <ForecastRow data={forecast.list[4]} />
        <ForecastRow data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "bd8ecef3a5464b3533486b9092216486";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
