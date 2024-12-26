import "./App.css";

const Cars = ({ cars }) => {
  const carsListing = cars.map((car) => (
    <div key={car.id}>
      <h3>Brands: {car.brand}</h3>
      <p>Price: {car.price}</p>
    </div>
  ));
  return <>{carsListing}</>;
};

const Hotels = ({ hotels }) => {
  const hotelListing = hotels.map((hotel) => (
    <div key={hotel.id}>
      <h3>Name: {hotel.name}</h3>
      <p>Location: {hotel.location}</p>
    </div>
  ));
  return <>{hotelListing}</>;
};

const Podcasts = ({ podcasts }) => {
  const podcastsListing = podcasts.map((podcast) => (
    <div key={podcast.id}>
      <h3>Title: {podcast.title}</h3>
      <p>Host: {podcast.host}</p>
    </div>
  ));
  return <>{podcastsListing}</>;
};

const Articles = ({ articles }) => {
  const articlesListing = articles.map((article) => (
    <div key={article.id}>
      <h3>Title: {article.title}</h3>
      <p>Content: {article.content}</p>
    </div>
  ));
  return <>{articlesListing}</>;
};

const Movies = ({ movies }) => {
  const moviesListing = movies.map((movie) => (
    <div key={movie.id}>
      <h3>Title: {movie.title}</h3>
      <p>Director: {movie.director}</p>
    </div>
  ));
  return <>{moviesListing}</>;
};

export default function App() {
  const cars = [
    { id: 1, brand: "Toyota", price: 25000 },
    { id: 2, brand: "Honda", price: 30000 },
    { id: 3, brand: "Ford", price: 35000 },
  ];

  const hotels = [
    { id: 1, name: "Marriot", location: "New York" },
    { id: 2, name: "Hilton", location: "Log Angles" },
    { id: 3, name: "Sheraton", location: "Chicago" },
  ];

  const podcasts = [
    { id: 1, title: "Podcast 1", host: "Host 1" },
    { id: 2, title: "Podcast 2", host: "Host 2" },
    { id: 3, title: "Podcast 3", host: "Host 3" },
  ];
  const articles = [
    { id: 1, title: "Article 1", content: "Content 1" },
    { id: 2, title: "Article 2", content: "Content 2" },
    { id: 3, title: "Article 3", content: "Content 3" },
  ];
  const movies = [
    { id: 1, title: "Movie 1", director: "Director 1" },
    { id: 2, title: "Movie 2", director: "Director 2" },
    { id: 3, title: "Movie 3", director: "Director 3" },
  ];

  return (
    <>
      <h1>Cars</h1>
      <Cars cars={cars} />
      <hr />
      <h1>Hotels</h1>
      <Hotels hotels={hotels} />
      <hr />
      <h1>Podcasts</h1>
      <Podcasts podcasts={podcasts} />
      <hr />
      <h1>Articles</h1>
      <Articles articles={articles} />
      <hr />
      <h1>Movies</h1>
      <Movies movies={movies} />
    </>
  );
}
