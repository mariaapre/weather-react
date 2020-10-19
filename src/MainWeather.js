import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";

import TemperatureUnits from "./TemperatureUnits";

export default function MainWeather(props) {
  return (
    <div className="MainWeather">
      <ul>
        <li>
          <CurrentDate date={props.data.date} />
        </li>
      </ul>
      <h1> {props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              Precipitation: <span></span>-- %
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />{" "}
          </div>
          <TemperatureUnits celsius={props.data.temperature} />
          <div className="float-center">
            <ul>
              <li>{props.data.description}</li>
              <li>
                Sunrise: <span className="hour">{props.data.sunrise} </span>
              </li>
              <li>
                Sunset: <span className="hour">{props.data.sunset}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h4>Weekly forecast:</h4>
      <div className="row weather-forecast"></div>
    </div>
  );
}
