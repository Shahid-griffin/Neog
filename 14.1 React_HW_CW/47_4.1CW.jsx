import { useState } from "react";

export default function App() {
  // by default structure to write th use tste hook
  // const [statevariable,setterFunction] = useState(intialValue)

  function ToggleTheme() {
    const [theme, setTheme] = useState("Light");
    return (
      <div>
        <p>Current Theme :{theme}</p>
        <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
          Toggle Theme
        </button>
      </div>
    );
  }

  function TogglePassword() {
    const [visibility, setVisibility] = useState(false);
    return (
      <>
        <p>
          {visibility ? "Mypassword : janaaL***" : "Mypassword : *********"}{" "}
        </p>
        <button onClick={() => setVisibility(!visibility)}>
          Show/Hide Password
        </button>
      </>
    );
  }

  function ToggleText() {
    const [expanded, setExpanded] = useState(false);
    const text = "this is a longer text is typically hidden unless expanded ";
    return (
      <>
        <p>{expanded ? text : `${text.substring(0, 20)}...`}</p>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Collapse" : "Expand"}
        </button>
      </>
    );
  }

  function ToggleTab() {
    const [activeTab, setActiveTab] = useState("Home");
    return (
      <>
        <button onClick={() => setActiveTab("Home")}>Home</button>
        <button onClick={() => setActiveTab("Profile")}>Profile</button>
        <button onClick={() => setActiveTab("Message")}>Message</button>
        <p>Content of {activeTab} tab.</p>
      </>
    );
  }

  function ToggleSize() {
    const [fontSize, setFontSize] = useState(14);
    return (
      <>
        <p style={{ fontSize: `${fontSize}px` }}>Adjust font size</p>
        <button onClick={() => setFontSize(fontSize + 1)}>Increase Size</button>
        <button onClick={() => setFontSize(fontSize - 1)}>Decrease Size</button>
      </>
    );
  }
  return (
    <main className="container">
      <ToggleTheme />
      <hr />
      <TogglePassword />
      <hr />
      <ToggleText />
      <hr />
      <ToggleTab />
      <hr />
      <ToggleSize />
    </main>
  );
}
