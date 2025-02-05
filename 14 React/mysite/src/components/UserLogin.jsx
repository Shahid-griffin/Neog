import React, { useState } from "react";

const UserLogin = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && pass) {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      {loggedIn ? (
        <div>
          <h2>Welcome, {name}!</h2>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default UserLogin;