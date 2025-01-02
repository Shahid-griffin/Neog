import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  function Togglenumber() {
    const [number, setnumber] = useState(0);
    return (
      <>
        <p>{number}</p>
        <button onClick={() => setnumber(number + 1)}>Increment</button>
        <button onClick={() => setnumber(number - 1)}>Decrement</button>
      </>
    );
  }

  function ToggleBackground() {
    const [color, setColor] = useState("lightblue"); // Initial color is lightblue

    return (
      <>
        <button
          style={{ backgroundColor: color }} // Apply dynamic background color
          onClick={() => setColor(color === "lightblue" ? "grey" : "lightblue")} // Toggle color
        >
          Toggle Background
        </button>
      </>
    );
  }

  function ToggleText() {
    const [text, setText] = useState("Hello, how are you?"); // Initial text state

    return (
      <>
        <p>{text}</p>
        <button
          onClick={() =>
            setText((prevText) =>
              prevText === "Hello, how are you?" ? "" : "Hello, how are you?"
            )
          }
        >
          {text === "Hello, how are you?" ? "Hide Message" : "Show Message"}
        </button>
      </>
    );
  }

  function ToggleText1() {
    const [text, setText] = useState(false); // Initial text state (boolean)

    return (
      <>
        <p>{text ? "Hello, how are you?" : ""}</p>
        <button onClick={() => setText((prevText) => !prevText)}>
          {text ? "Hide Message" : "Show Message"}
        </button>
      </>
    );
  }

  function ShowMessage() {
    const [visiblity, setVisiblity] = useState(true);
    const message = "This is a toggleable message!";
    return (
      <div>
        <button onClick={() => setVisiblity(!visiblity)}>
          {visiblity ? "Hide Message" : "Show Message"}
        </button>
        {visiblity && <p>{message}</p>}
      </div>
    );
  }
  function ToggleColor() {
    const [color, setBtnColor] = useState("red"); // Initial color state

    return (
      <>
        <p style={{ color: color }}>Hello</p>
        <button onClick={() => setBtnColor(color === "red" ? "blue" : "red")}>
          Toggle Color
        </button>
      </>
    );
  }
  function FruitList() {
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
    const [selectedFruit, setSelectedFruit] = useState("");

    return (
      <div>
        <h3>Fruit List</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li
              key={index}
              onClick={() => setSelectedFruit(fruit)}
              style={{
                cursor: "pointer",
              }}
            >
              {fruit}
            </li>
          ))}
        </ul>
        {selectedFruit && (
          <p>
            You selected: <strong>{selectedFruit}</strong>
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      <Togglenumber />
      <hr />
      <ToggleBackground />
      <hr />
      <ToggleText />
      <hr />
      <ToggleText1 />
      <hr />
      <ShowMessage />
      <hr />
      <ToggleColor />
      <hr />
      <FruitList />
    </>
  );
}
