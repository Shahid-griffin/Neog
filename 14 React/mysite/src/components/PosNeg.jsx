import React, { useState } from "react";

const PosNeg = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Positive and Negative</h1>
      <p>Count: {count}</p>
      <p>{count >= 0 ? "The count is positive." : "The count is negative."}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};

export default PosNeg;