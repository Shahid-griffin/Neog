import "./App.css";

// how to do call function and write inside the component 

const MathOperation = () => {
  const a = 20;
  const b = 8;

  const getSum = (x, y) => {
    return x + y;
  };

  const getDifference = (x, y) => {
    return x - y;
  };
  return (
    <div>
      <p>
        {a} + {b} equal {getSum(a, b)}
      </p>
      <p>
        {a} - {b} equal {getDifference(a, b)}
      </p>
    </div>
  );
};

const CallGreetingFunction = () => {
  const getGreeting = () => {
    return "Hello World";
  };
  return <h1>{getGreeting()}</h1>;
};

const GetFormattedDAte = () => {
  const getCurrentDate = () => {
    return new Date().toLocaleDateString();
  };
  return <p>Current Date: {getCurrentDate()}</p>;
};

export default function App() {
  return (
    <>
      <GetFormattedDAte />
      <CallGreetingFunction />
      <MathOperation />
    </>
  );
}
