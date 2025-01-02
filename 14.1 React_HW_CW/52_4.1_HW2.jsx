import { useState } from "react";

export default function App() {
  //mistake i made
  // wrong function namein the buttton also the variable name inthe display missing key in span
  function ToggleImg() {
    const imgarr = [
      "https://placehold.co/100x100?text=Image1",
      "https://placehold.co/100x100?text=Image2",
      "https://placehold.co/100x100?text=Image3",
    ];
    const [selectedimg, selectImg] = useState("");

    return (
      <>
        <div>
          {selectedimg && (
            <img
              className="mb-2"
              src={selectedimg}
              width="200"
              height="200"
              alt="selected"
            />
          )}
        </div>

        {imgarr.map((image, index) => (
          <span key={index}>
            {" "}
            <img
              src={image}
              onClick={() => selectImg(image)}
              style={{
                cursor: "pointer",
              }}
            />
          </span>
        ))}
      </>
    );
  }

  function ToogleItem() {
    const [items, setItems] = useState([]); // State to store list items

    const addItem = () => {
      setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    };

    return (
      <div>
        <button onClick={addItem}>Show Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  function ToogleColor() {
    const arr = ["red", "blue", "pink", "green"];
    const [item, setColor] = useState("red");

    const pickColor = () => {
      const ans = Math.floor(Math.random() * arr.length);
      setColor(arr[ans]);
    };
    return (
      <div style={{ background: item }}>
        <p>Background Color is {item}</p>
        <button onClick={pickColor}>Change Color</button>
      </div>
    );
  }

  function ToggleLoading() {
    const [visibility, setVisibility] = useState(true); // Fixed state variable and function names

    return (
      <>
        {visibility ? <p>Content has loaded</p> : <p>loading...</p>}
        <button onClick={() => setVisibility(!visibility)}>
          Toggle Loading
        </button>
      </>
    );
  }

  function ToggleLast(){
    const arr =["Item 1","item 2","Item 3"]
    const [last,setLast]=useState("Item 1")

    return(
      <>
      <ul className="list-unstyled">
        {arr.map((x,index)=>(
          <li key={index} onClick={()=>setLast(x)}
          style={{
            cursor :"pointer",
            color: last === x ? "blue" : "black",
           
          }}>{x}</li>
        ))}
      </ul>
      {last && (
          <p>
            You selected: <strong>{last}</strong>
          </p>)}
      </>
    )

  }
  return (
    <>
      <ToggleImg />
      <hr />
      <ToogleItem />
      <hr />
      <ToogleColor />
      <hr />
      <ToggleLoading />
      <hr/>
      <ToggleLast/>
    </>
  );
}
