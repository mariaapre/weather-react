import React, { useState } from "react";

export default function TemperatureUnits(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureUnits">
        <strong className="main">{Math.round(props.celsius)}</strong>
        <span className="units">
          <a href="/" className="active">
            °C
          </a>
          |
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureUnits">
        <strong className="main">{Math.round(fahrenheit())}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
