import { useState } from "react";

function Recipe() {
  const [list, setlist] = useState([]);
  const [final, setfianl] = useState([]);

  const listHandler = (event) => {
    const input = (event.target.value).split(". ")
    const stp = input.split(". ");
    setlist(stp);
  };

  const btnHandler = () => {
    let answer = list.map((word, index) => <li key={index}>{word}</li>);
    setfianl(answer);
  };
  return (
    <>
      <label htmlFor="uselist">Enter therecipe: </label>
      <textarea id="useList" rows={"5"} cols={"50"} onChange={listHandler} />
      <button onClick={btnHandler}>Save recipe</button>
      <br />
      <br />
      {final.length > 0 && <ol>{final}</ol>}
    </>
  );
}

function Diary() {
  const [feed, setfeed] = useState();
  const [newfeed, setnewfeed] = useState();

  return (
    <>
      <label htmlFor="userfeed">Give your Feedback: </label>
      <textarea
        id="userfeed"
        rows={"5"}
        cols={"50"}
        onChange={(e) => setfeed(e.target.value)}
      />
      <button onClick={() => setnewfeed(feed)}>Submit</button>
      {newfeed && (
        <p>
          <i>Your Diary: {newfeed}</i>
        </p>
      )}
      <br />
    </>
  );
}
//mistake im passing null shoud pass the empty arr
function Food() {
  const [food, setFood] = useState([]);
  const [final, setfinal] = useState([]);

  const setHandle = (event) => {
    const fod = event.target.value; // Get the input value
    const ans = fod.split(". "); // Split into items based on ". "
    setFood(ans); // Update the food array
  };

  const foodHandler = () => {
    setfinal(food); // **Directly store the array in final state**
  };

  return (
    <>
      <label htmlFor="userfood">Enter the list of food: </label>
      <textarea id="userfood" rows={"5"} cols={"50"} onChange={setHandle} />
      <button onClick={foodHandler}>Display Items</button>
      {final.length > 0 && (
        <ul>
          {final.map((item, index) => (
            <li key={index}>{item}</li> // **Dynamically render list items**
          ))}
        </ul>
      )}
    </>
  );
}

export default function App() {
  return (
    <>
      <Recipe />
      <br />
      <br />
      <Diary />
      <br />
      <br />
      <Food />
    </>
  );
}
