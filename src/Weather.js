import React, { useState } from "react";
import MainWeather from "./MainWeather";
import ForecastIntro from "./ForecastIntro";

import axios from "axios";

import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      sunrise: formatHours(response.data.sys.sunrise * 1000),
      sunset: formatHours(response.data.sys.sunset * 1000),
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();

    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }
  function search() {
    const apiKey = "bd8ecef3a5464b3533486b9092216486";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(); //another api call that updated the state
  }

  function handleCityChange(event) {
    setCity(event.target.value); //updates the city entered
  }

  function actualLocation(position) {
    let apiKey = "bd8ecef3a5464b3533486b9092216486";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    apiUrl = `https://api.opedisplayForecastnweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(actualLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter city"
                  className="form-control"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
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
                  onClick={getCurrentPosition}
                >
                  <i className="fas fa-map-marker-alt"></i>
                </button>
              </div>
            </div>
          </form>
          <MainWeather data={weatherData} />
          <span>
            <ForecastIntro city={weatherData.city} />
          </span>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
