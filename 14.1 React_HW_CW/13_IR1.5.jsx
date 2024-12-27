import "./App.css";
// how to do calculation

const Addition = () => {
  const a = 2;
  const b = 5;
  return (
    <p>
      The result of {a} + {b} is {a + b}
    </p>
  );
};

const TemperatureCalculator = () => {
  const celcius = 30;
  const fahrenheit = (celcius * 9) / 5 + 32;
  return (
    <p>
      {celcius} degree is equal to {fahrenheit} Fahrenheit
    </p>
  );
};

const CombinedOperation = () => {
  const a = 15;
  const b = 7;
  const c = 3;
  return (
    <div>
      <p>
        {a} + {b} equal to {a + b}
      </p>
      <p>
        {a} + {b} + {c} is equal to {a + b + c}
      </p>
    </div>
  );
};

const Welcome = () => {
  const firstName = "john";
  const lastName = "Doe";

  return <p>{`Welcome ,${firstName} ${lastName}`}</p>;   // how to use the string literal 
};

export default function App() {
  return (
    <main>
      <Addition />
      <TemperatureCalculator />
      <Welcome />
      <CombinedOperation />
    </main>
  );
}
