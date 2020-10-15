import React from "react";
import Forecast from "./Forecast";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Forecast city="Denver" />
      <Weather />
    </div>
  );
}

export default App;
