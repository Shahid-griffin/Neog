import { useState } from "react";
import useFetch from "../hooks/useFetch";

const App = () => {
  const [showData, setShowData] = useState(false);

  const { data } = useFetch(
    "https://v2.jokeapi.dev/joke/Programming?type=single"
  );

  return (
    <div>
      <h1>Programming API</h1>
      <button onClick={() => setShowData(true)}>Get Programming Joke</button>
      {showData && (
        <div>
          {data ? (
            <p>{JSON.stringify(data.joke)}</p>
          ) : (
            <p>An Error ocurred while fetching joke.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;