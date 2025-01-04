import { useState } from "react";

function Feedback() {
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
      {newfeed && <p>Your Feedback: {newfeed}</p>}
    </>
  );
}

function Capitalmsg() {
  const [msg, setmessgae] = useState();
  // const [capmsg,setcapmsg] =useState()

  const msgHandle = () => {
    const answer = msg.toUpperCase();

    alert(`Message : ${answer}! `);
  };

  return (
    <>
      <label htmlFor="usermsg">Enter your Message: </label>
      <textarea
        type="text"
        id="usemsg"
        rows={"5"}
        cols={"50"}
        onChange={(e) => setmessgae(e.target.value)}
      />
      <button onClick={msgHandle}>Display Message </button>
    </>
  );
}

function Question() {
  const [ques, setquest] = useState();
  const [final, setfinal] = useState();

  const btnhanlder = () => {
    let answer = ques.trim();

    if (answer.charAt(answer.length - 1) === "?") {
      setfinal(answer);
    } else {
      answer = answer + "?";
      setfinal(answer);
    }
  };
  return (
    <>
      <label htmlFor="usermsg">Ask Your Question: </label>
      <textarea
        rows={"5"}
        cols={"50"}
        id="usermsg"
        onChange={(e) => setquest(e.target.value)}
      />
      <button onClick={btnhanlder}>Submit Question</button>
      {final && <p>Your Question : {final}</p>}
    </>
  );
}

function Comment() {
  const [cnt, setCnt] = useState(""); // To store the input value
  const [submittedComment, setSubmittedComment] = useState(""); // To store the displayed comment

  const btnHandler = () => {
    setSubmittedComment("//" + cnt); // Update the submitted comment
  };

  return (
    <>
      <label htmlFor="usercnt">Enter your Comment:</label>
      <input
        id="usercnt"
        onChange={(e) => setCnt(e.target.value)} // Update input value
      />
      <button onClick={btnHandler}>Submit Comment</button>
      {submittedComment && <p>{submittedComment}</p>}
    </>
  );
}

export default function App() {
  return (
    <>
      <Feedback />
      <br />
      <br />
      <Capitalmsg />
      <br />
      <br />
      <Question />
      <br />
      <br />
      <Comment />
    </>
  );
}
