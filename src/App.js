import React from 'react';
import Forecast from "./Forecast";
import Weather from "./Weather";




function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Forecast city="Denver" />
        <Weather />

      </header>
    </div>
  );
}

export default App;
