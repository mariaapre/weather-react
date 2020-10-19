import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="Houston" />
          <footer>
            <small>
              <a
                href="https://github.com/mariaapre/weather-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open-source code{" "}
              </a>
              by Maria Apreza
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
