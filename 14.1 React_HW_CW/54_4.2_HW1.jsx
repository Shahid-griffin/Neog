import { useState } from "react";

function ValidateNumber() {
  const [number, setNumber] = useState();

  const setnumberHandler = (event) => {
    setNumber(event.target.value);
  };
  const validateHandler = () => {
    if (number.length == 10) {
      alert("you number is valid");
    } else {
      alert("enter the valid number  of 10 digit");
    }
  };

  return (
    <>
      <label for="usernumber">Enter your phone number</label>
      <input id="usernumber" onChange={setnumberHandler} />
      <button onClick={validateHandler}>Validate Phone Number</button>
    </>
  );
}

function ValiadtePassword() {
  const [email, setPassword] = useState();
  const setpasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const checkstrengthHandler = () => {
    if (email.length > 8) {
      alert("you password is strong");
    } else {
      alert("your passsword is weak min 8 char ");
    }
  };

  return (
    <>
      <label for="userpassword">Enter your password</label>
      <input type="password" id="userpassword" onChange={setpasswordHandler} />
      <button onClick={checkstrengthHandler}>Check Password Strength</button>
    </>
  );
}

function CalculateAge() {
  const [age, setAge] = useState();

  const setAgeHandler = (event) => {
    const birthDate = event.target.value; // YYYY-MM-DD format
    const yearOfBirth = birthDate.split("-")[0]; // Extract the year
    setAge(yearOfBirth);
  };

  const ageHandler = () => {
    const currentYear = new Date().getFullYear(); // Get current year dynamically
    const calculatedAge = currentYear - age;
    alert(`You are ${calculatedAge} years old`); // Use calculatedAge here
  };

  return (
    <>
      <label htmlFor="userAge">Enter your birthday: </label>
      <input type="date" id="userAge" onChange={setAgeHandler} />
      <button onClick={ageHandler}>Calculate Age</button>
    </>
  );
}

function ShowColor() {
  const [color, setcolor] = useState();
  const [displayColor, setDisplayColor] = useState("");
  const setcolorHandler = (event) => {
    setcolor(event.target.value);
  };
  const showhandler = () => {
    setDisplayColor(color);
  };

  return (
    <>
      <label for="usercolor">Enter your favorite color:</label>
      <input id="usercolor" onChange={setcolorHandler} />
      <button onClick={showhandler}>Display color</button>
      <br />
      <br />
      {displayColor && <p>Your favourite Color is {displayColor}</p>}
    </>
  );
}

function ShowQuery() {
  const [query, setquery] = useState();
  const [displayQuery, setDisplayQuery] = useState("");
  const setqueryHandler = (event) => {
    setquery(event.target.value);
  };
  const showhandler = () => {
    setDisplayQuery(query);
  };

  return (
    <>
      <label htmlFor="userquery">Enter your search query:</label>
      <input id="userquery" onChange={setqueryHandler} />
      <button onClick={showhandler}>Search</button>
      <br />
      <br />
      {displayQuery && <p>Searching for: {displayQuery}</p>}
    </>
  );
}

export default function App() {
  return (
    <>
      <ValidateNumber />
      <br />
      <br />
      <ValiadtePassword />
      <br /> <br />
      <CalculateAge />
      <br />
      <br />
      <ShowColor />
      <br />
      <br />
      <ShowQuery />
    </>
  );
}
