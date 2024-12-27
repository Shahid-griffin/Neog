import "./App.css";

// how to use the dynamic naimg in the react

const StudentDetails = () => {
  const name = "shahid";
  const age = 25;
  const grade = "A";

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
  );
};

const Product = () => {
  const product = {
    name: "laptop",
    brand: "Dell",
    price: 2000,
  };
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

const UserProfile = () => {
  const user = {
    name: "john Doe",
    age: 30,
    address: {
      city: "New york",
      state: "CA",
      zipcode: "10001",
      street: "123 Main St",
    },
  };
  return (
    <div>
      <p>Name: {user.name} </p>
      <p>Age: {user.age} </p>
      <p>
        Address: {user.address.street}, {user.address.city} ,{" "}
        {user.address.state}, {user.address.zipcode}{" "}
      </p>
    </div>
  );
};

const MovieDetails = () => {
  const movie = {
    title: "Inception",
    releaseyear: 2010,
    director: {
      name: "Christofor Nolan",
      nationality: "British",
    },
    genre: ["sci-fi", "Action", "thriller"],
  };

  return (
    <div>
      <p>Title : {movie.title}</p>
      <p>Release Year : {movie.releaseyear}</p>
      <p>
        Director : {movie.director.name}({movie.director.nationality})
      </p>
      <p>Genre: {movie.genre.join(", ")}</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>Student Details</h1>
      <StudentDetails />

      <h1>Product Details</h1>
      <Product />

      <h1>User Profile</h1>
      <UserProfile />

      <h1>Movie Details</h1>
      <MovieDetails />
    </div>
  );
}
