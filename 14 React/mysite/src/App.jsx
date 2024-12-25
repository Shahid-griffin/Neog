import "./App.css";

// 1. Create a React component called Heading, to display a heading as "React Playground".
const Heading = () => {
  return <h1>React Playground</h1>;
};

// 2. Create a React component called Greetings, to display a heading as "Hello, Alice Smith!"
// where Alice Smith is a dynamic data.
const name = "Alice Smith";
const Greeting = () => {
  return <h1>Hello, {name}!</h1>;
};

//3. Create a React component called ExternalLink, to display the link text "Visit React Examples".
//Link the text to https://www.reactexamples.com and upon clicking the link it should open in a new tab.

const ExtrnalLink = () => {
  return (
    <a href="http://reactexamples.com" target="_blank">
      Visit React Examples
    </a>
  );
};

//4. Create a React component called Avatar, to display a placeholder image of 200x200.

const Avatar = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/200x200" alt="avatar" />
    </div> 
    )
};

//5. Create a React component called UserInfo to display the following user info.

const UserInfo = () =>{
  const user = {
      name: "Alice Smith",
      age: 28,
      email: "alice.smith@example.com",
      bio: "Passionate about React and building innovative web applications."
    };

  return (
    <div>
      <h1>User Information</h1>
      <p><strong> Name: </strong>{user.name} </p>
      <p><strong> Age: </strong>{user.age} </p>
      <p><strong> Email: </strong>{user.email} </p>
      <p><strong> Bio: </strong>{user.bio} </p>
    </div>
  )
}

function App() {
  return (
    <>
      <Heading />
      <Greeting />
      <ExtrnalLink />
      <Avatar />
      <UserInfo />
    </>
  );
}
export default App;
