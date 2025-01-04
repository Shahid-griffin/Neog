import { useState } from "react";

function ValidZipcode() {
  const [zip, setzip] = useState();
  const inputHandler = (event) => {
    setzip(event.target.value);
  };

  const validateHandler = () => {
    if (zip.length >= 5) {
      alert("Valid zipcode");
    } else {
      alert("invalid zipcode please enter min 5 char");
    }
  };

  return (
    <>
      <label htmlFor="userzip">Enter your zipcode:</label>
      <input id="userzip" onChange={inputHandler} />
      <button onClick={validateHandler}>Validate Zipcode</button>
    </>
  );
}

function Tocapital() {
  const [name, setname] = useState();

  const btnHandler = () => {
    const finalname = name.split(" ");

    const isCapital = finalname.every(
      (word) => word.charAt(0) === word.charAt(0).toUpperCase()
    );
    if (isCapital) {
      alert(`Capitalize Full name :  ${name}`);
    } else {
      const answer = finalname
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      alert(` name  : ${answer}`);
    }
  };
  return (
    <>
      <label htmlFor="username">Enter your Full Name</label>
      <input
        id="username"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={btnHandler}>Capitalize Name</button>
    </>
  );
}

function ResetTerm() {
  const [name, setname] = useState();
  const btnHandler = () => {
    setname("");
  };
  return (
    <>
      <label htmlFor="userid">Enter Search Term: </label>
      <input
        id="userid"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <button onClick={btnHandler}>Reset Search Term</button>
      {name && <p>{name}</p>}
    </>
  );
}

function ClearMessage() {
  const [message, setmessgae] = useState();

  const btnHandler = () => {
    setmessgae(" ");
  };
  return (
    <>
      <label htmlFor="usermg">Enter a Message: </label>
      <input id="usermg " value={message} onChange={(e) => e.target.value} />
      <button onClick={btnHandler}>Clear Message</button>
    </>
  );
}

export default function () {
  return (
    <>
      <ValidZipcode />
      <br />
      <br />
      <Tocapital />
      <br />
      <br />
      <ResetTerm />
      <br />
      <br />
      <ClearMessage />
    </>
  );
}
