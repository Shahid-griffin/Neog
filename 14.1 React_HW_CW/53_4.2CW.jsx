import { useState } from "react";

const GreetUser = () => {
  const [userName, setUserName] = useState();
  const inputHandler = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div className=" mt-5">
      <label for="username">Enter the Name:</label>
      <input id="username" onChange={inputHandler} />
      {userName && <p>Hello!,{userName}</p>}
    </div>
  );
};

const ValidateEmail = () => {
  const [email, setEmail] = useState("");
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const clickHandler = () => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.indexOf(".");

    if (atIndex > 0 && dotIndex > atIndex) {
      alert("Valid Email Address");
    } else {
      alert("invalid email address");
    }
  };
  return (
    <div>
      <label for="emailInput">Enter an email: </label>
      <input id="emailInput" onChange={handleEmailInput} />
      <button onClick={clickHandler}>Validate Email</button>
    </div>
  );
};

const CalculateSquare = () => {
  const [numberInput, setNumberInput] = useState();
  const [squareValue, setSquareValue] = useState();
  const clickHandler = () => {
    const value = numberInput * numberInput;
    setSquareValue(value);
  };
  return (
    <>
      <label for="numberInput">Enter the value: </label>
      <input
        id="numberInput"
        onChange={(event) => setNumberInput(event.target.value)}
      />
      <button onClick={clickHandler}>Calcuate the square</button>
      {squareValue && <p>{squareValue}</p>}
    </>
  );
};
export default function App() {
  return (
    <>
      <GreetUser />
      <br />
      <br />
      <ValidateEmail />
      <br/>
      <CalculateSquare/>
    </>
  );
}
