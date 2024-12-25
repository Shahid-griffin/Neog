import "./App.css";
//1. Create a React component called WelcomeMessage, to display a heading as "Discover the World of JSX!".

const WelcomeMessage = () => {
  return <h1>Discover the World of JSX!</h1>;
};

//2. Create a React component called GreetActor, to display a heading as "Welcome, Tom Hardy fans!"
//where Tom Hardy is a dynamic data.

const GreetActor = () => {
  const name = "Tom Hardy";
  return <h1>Welcome, {name} fans!</h1>;
};
//3. Create a React component called ExternalLink, to display the link text "Explore React Documentation".
// Link the text to https://www.reactjs.org and upon clicking the link it should open in a new tab.

const ExternalLink = () => {
  return (
    <a href="https://www.reactjs.org" target="_blank">
      Explore React Documentaion
    </a>
  );
};

//4. Create a React component called VideoPlayer, to display a video
//https://www.example.com/video.mp4. Explore and make use of video tag.

const VideoPlayer = () => {
  return (
    <div>
      <h2>Video Player</h2>
      <video width="640" height="360" controls>
        <source src="https://www.example.com/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

//5. Create a React component called MovieDetails to display the following movie details.

const MovieDetails = () => {
  const movie = {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    rating: "PG-13",
    duration: "2h 22min",
  };
  return (
    <div>
      <h1>Movie Details</h1>
      <p>
        <strong>Title: </strong>
        {movie.title}
      </p>
      <p>
        <strong>Director: </strong>
        {movie.director}
      </p>
      <p>
        <strong>Year: </strong>
        {movie.year}
      </p>
      <p>
        <strong>Rating: </strong>
        {movie.rating}
      </p>
      <p>
        <strong>Duration: </strong>: {movie.duration}
      </p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <WelcomeMessage />
      <GreetActor />
      <ExternalLink />
      <VideoPlayer />
      <MovieDetails />
    </main>
  );
}
