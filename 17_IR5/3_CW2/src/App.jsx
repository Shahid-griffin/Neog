import { useState } from "react";

  import useFetch from "../hooks/useFetch";

const App = () => {
  const [showData, setShowData] = useState(false);

  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div className="container py-4">
      <h1>Todo API</h1>
      <button onClick={() => setShowData(true)}>Get Todo</button>
      {showData && (
        <div>
          {data ? <p>{JSON.stringify(data)}</p> : <p>Unable to fetch data</p>}
        </div>
      )}
    </div>
  );
};

export default App;