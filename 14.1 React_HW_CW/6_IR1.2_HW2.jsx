import "./App.css";

// 1. Create a React component called CarDetails to display the following details.

const CarDetails = () => {
  const car = {
    make: "Tesla",
    model: "Model S",
    year: 2022,
    color: "Black",
  };
  return (
    <div>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Color: {car.color}</p>
    </div>
  );
};

// 2. Create a React component called MusicProfile to display the following details.

const MusicProfile = () => {
  const artist = {
    name: "Beyoncé",
    genre: "R&B",
    albums: 8,
    awards: ["Grammy Award", "MTV Video Music Award"],
  };
  return (
    <div>
      <p>Name: {artist.name}</p>
      <p>Genre: {artist.genre}</p>

      <p>Albums: {artist.albums}</p>

      <p>Awards: {artist.awards.join(", ")}</p>
    </div>
  );
};

// 3. Create a React component called RecipeInformation to display the following details.

const RecipeInformation = () => {
  const recipe = {
    name: "Spaghetti Bolognese",
    chef: {
      name: "Jamie Oliver",
      nationality: "British",
    },
    ingredients: [
      "Spaghetti",
      "Ground beef",
      "Tomato sauce",
      "Onion",
      "Garlic",
      "Herbs",
    ],
    cookingTime: 45,
  };
  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>
        Chef: {recipe.chef.name} ({recipe.chef.nationality})
      </p>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Cooking Time: {recipe.cookingTime}</p>
    </div>
  );
};

// 4. Create a React component called MusicAlbum to display the following details.

const MusicAlbum = () => {
  const album = {
    title: "Abbey Road",
    artist: {
      name: "The Beatles",
      nationality: "British",
    },
    releaseYear: 1969,
    genres: ["Rock", "Pop"],
  };

  return (
    <div>
      <p>{album.title}</p>
      <p>
        Artist: {album.artist.name} ({album.artist.nationality})
      </p>
      <p>Release Year: {album.releaseYear}</p>
      <p>Genres: {album.genres.join(", ")}</p>
    </div>
  );
};

//5. Create a React component called LaptopDetails to display the following details.
const LaptopDetails = () => {
  const laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    screenSize: "13 inches",
    price: 1299.99,
    features: ["A15 Bionic chip", "Dual-camera system", "5G capable"],
  };
  return (
    <div>
      <p>Brand: {laptop.brand}</p>
      <p>Model: {laptop.model}</p>
      <p>Screen Size: {laptop.screenSize}</p>
      <p>Price: {laptop.price}</p>
      <p>Features : {laptop.features.join(", ")}</p>
    </div>
  );
};
export default function App() {
  return (
    <div>
      <h1>Car Details</h1>
      <CarDetails />

      <h1>Music Profile</h1>
      <MusicProfile />

      <h1>Recipe Information </h1>
      <RecipeInformation />

      <h1>Music Album</h1>
      <MusicAlbum />

      <h1>Laptop Details</h1>
      <LaptopDetails />
    </div>
  );
}
