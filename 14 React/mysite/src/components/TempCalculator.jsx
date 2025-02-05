import React, { useState } from "react";

const TempCalculator = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const celsiusToFahrenheit = (e) => {
    const fahrenheitTemp = (9 / 5) * e.target.value + 32;
    setCelsius(e.target.value);
    setFahrenheit(fahrenheitTemp);
  };

  const fahrenheitToCelsius = (e) => {
    const celsiusTemp = ((e.target.value - 32) * 5) / 9;
    setCelsius(celsiusTemp);
    setFahrenheit(e.target.value);
  };

  return (
    <div>
      <h1>Temperature Convertor</h1>
      <label htmlFor="celsius">Celsius: </label>
      <input
        type="number"
        id="celsius"
        value={celsius}
        onChange={celsiusToFahrenheit}
      />
      <br />
      <br />
      <label htmlFor="fahrenheit">Fahrenheit: </label>
      <input
        type="number"
        id="fahrenheit"
        value={fahrenheit}
        onChange={fahrenheitToCelsius}
      />
    </div>
  );
};

export default TempCalculator;