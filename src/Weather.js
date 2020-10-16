import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Thursday 09:50",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      sunrise: response.data.sys.sunrise,
      sunset: response.date.sys.sunset,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form className="mb-3">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="search"
                      placeholder="Enter city"
                      className="form-control"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      className="btn btn-light location-button w-50"
                    >
                      <i className="fas fa-map-marker-alt"></i>
                    </button>
                  </div>
                </div>
              </form>
              <ul>
                <li>{weatherData.date}</li>
              </ul>
              <h1> {weatherData.city} </h1>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      Precipitation: <span></span>-- %
                    </li>
                    <li>
                      Humidity: <span>{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{weatherData.wind}</span> km/h
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="" alt="Clear" />
                  <strong className="main">
                    {Math.round(weatherData.temperature)}
                  </strong>
                  <span className="units">
                    <a href="/" className="active">
                      °C
                    </a>
                    |<a href="/">°F</a>
                  </span>
                  <ul>
                    <li className="text-capitalize">
                      {weatherData.description}
                    </li>
                    <li>
                      Sunrise: <span>{weatherData.sunrise}</span>
                    </li>
                    <li>
                      Sunset: <span>{weatherData.sunset}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4>Weekly forecast:</h4>
              <div className="row weather-forecast"></div>
            </div>
            <small>
              <a href="https://github.com/mariaapre/weather-react" target="/">
                Open-source code{" "}
              </a>
              by Maria Apreza
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bd8ecef3a5464b3533486b9092216486";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return "Loading...";
}
