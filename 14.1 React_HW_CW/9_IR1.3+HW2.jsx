import "./App.css";

// 1. Create a React component called WelcomeBanner to display the message "Welcome to My Recipe App!". Pass the app name, My Recipe as props.

const WelcomeBanner = (props) => {
  return (
    <div>
      <h1>Welcome to {props.name} App!</h1>
    </div>
  );
};

//2. Create a React component called RecipeDetails to display the following details. Pass the recipe data object as props.

const RecipeDetails = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Rating: {props.rating}</p>
    </div>
  );
};

//3. Create a React component called MovieInformation to display the following details. Pass the movie data object as props.

const MovieInformation = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Director: {props.director}</p>
      <p>Release Date: {props.releaseDate}</p>
    </div>
  );
};

// 4. Create a React component called ProductFeatures to display the following details. Pass the product data object as props.

const ProductFeatures = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Color: {props.color}</p>
      <p>Size: {props.size}</p>
    </div>
  );
};

//5. Create a React component called UserProfileCard to display the name, email and role of user. Pass the name, email and role as props.

const UserProfileCard = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <WelcomeBanner name="My Recipe" />

      <h1>Recipe Details</h1>
      <RecipeDetails title="Chocolate Cake" author="Baker Betty" rating={4.7} />

      <h1>Movie Informations</h1>
      <MovieInformation
        title="The Godfather"
        director="Francis Ford Coppola"
        releaseDate="March 24, 1972"
      />

      <h1>Product Features</h1>
      <ProductFeatures name="Smartwatch" color="Black" size="Medium" />

      <h1>User Profile</h1>
      <UserProfileCard name="John Doe" email="ztejd@example.com" role="Admin" />
    </div>
  );
}
