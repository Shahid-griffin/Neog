import React from "react";
import useFetch from "../hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://randomuser.me/api/?results=3"
  );

  return (
    <div>
      <h1>Random users</h1>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>En error ocurred while fetching users.</p>}
        {data && data.results && data.results.length > 0 ? (
          data.results.map((user) => (
            <div key={user}>
              <img src={user.picture.medium} alt="User Image" />
              <p>
                Name: {user.name.first} {user.name.last}
              </p>
              <p>Email: {user.email}</p>
              <p>City: {user.location.city}</p>
            </div>
          ))
        ) : (
          <p>User not found</p>
        )}
      </div>
    </div>
  );
};

export default App;