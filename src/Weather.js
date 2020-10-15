import React from "react";

import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Phoenix",
    date: "Friday 12:00",
    temperature: 87,
    description: "Sunny",
    sunrise: "6:45",
    sunset: "8:45",
    humidity: 20,
    wind: 3,
  };
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
                <div class="col-3">
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
              <li></li>
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
                <strong className="main">{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>
                  |<a href="/">°F</a>
                </span>
                <ul>
                  <li>{weatherData.description}</li>
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
}
