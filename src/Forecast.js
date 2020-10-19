import React, { useState } from "react";
import ForecastRow from "./ForecastRow";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast row">
        <ForecastRow props={forecast.list[0]} />
      </div>
    );
  } else {
    let apiKey = "bd8ecef3a5464b3533486b9092216486";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecast);
    return null;
  }
}
