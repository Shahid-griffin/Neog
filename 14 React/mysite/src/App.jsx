import React from "react";
import PosNeg from "./components/PosNeg";
import UserLogin from "./components/UserLogin";
import TempCalculator from "./components/TempCalculator";

const App = () => {
  return (
    <div>
      <PosNeg />
      <UserLogin />
      <TempCalculator/>
    </div>
  );
};

export default App;