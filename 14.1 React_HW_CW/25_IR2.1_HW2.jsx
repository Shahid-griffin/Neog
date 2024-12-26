import "./App.css";

const Laptops = ({ laptops }) => {
  const laptopList = laptops.map((laptop) => (
    <div key={laptop.id}>
      <h3>{laptop.name}</h3>
      <p>Price: ${laptop.Price}</p>
    </div>
  ));
  return <>{laptopList}</>;
};

const TouristSpots = ({ touristSpots }) => {
  const touristSpotsList = touristSpots.map((touristSpot) => (
    <div key={touristSpot.id}>
      <h3>{touristSpot.name}</h3>
      <p>Location: {touristSpot.location}</p>
    </div>
  ));
  return <>{touristSpotsList}</>;
};

const PodcastEpisodes = ({ podcastEpisodes }) => {
  const podcastEpisodesList = podcastEpisodes.map((podcastEpisode) => (
    <div key={podcastEpisode.id}>
      <h3>{podcastEpisode.title}</h3>
      <p>Duration: {podcastEpisode.duration}</p>
    </div>
  ));
  return <>{podcastEpisodesList}</>;
};

const NewsArticles = ({ newsArticles }) => {
  const newsArticleList = newsArticles.map((newsArticle) => (
    <div key={newsArticle.id}>
      <h3>{newsArticle.title}</h3>
      <p>{newsArticle.description}</p>
    </div>
  ));
  return <>{newsArticleList}</>;
};

const Games = ({ games }) => {
  const gamesList = games.map((game) => (
    <div key={game.id}>
      <h3>{game.title}</h3>
      <p>Genre: {game.genre}</p>
    </div>
  ));
  return <>{gamesList}</>;
};

export default function App() {
  const laptops = [
    { id: 1, name: "Dell", Price: 999 },
    { id: 2, name: "HP", Price: 899 },
    { id: 3, name: "Lenovo", Price: 1099 },
  ];

  const touristSpots = [
    { id: 1, name: "Grand Canyon", location: "Arizona,USA" },
    { id: 2, name: "Eiffel Tower", location: "Paris,France" },
    { id: 3, name: "Great Wall Of China", location: "Bejing,China" },
  ];

  const podcastEpisodes = [
    { id: 1, title: "Episode 1", duration: 30 },
    { id: 2, title: "Episode 2", duration: 45 },
    { id: 3, title: "Episode 3", duration: 60 },
  ];

  const newsArticles = [
    { id: 1, title: "News 1", description: "Description 1" },
    { id: 2, title: "News 2", description: "Description 2" },
    { id: 3, title: "News 3", description: "Description 3" },
  ];

  const games = [
    { id: 1, title: "Game 1", genre: "Action" },
    { id: 2, title: "Game 2", genre: "Adventure" },
    { id: 3, title: "Game 3", genre: "Strategy" },
  ];

  return (
    <>
      <h1>Laptops</h1>
      <Laptops laptops={laptops} />
      <hr />

      <h1>Tourist Spots</h1>
      <TouristSpots touristSpots={touristSpots} />
      <hr />

      <h1>Podcast Episodes</h1>
      <PodcastEpisodes podcastEpisodes={podcastEpisodes} />
      <hr />

      <h1>News Articles</h1>
      <NewsArticles newsArticles={newsArticles} />
      <hr />

      <h1>Games</h1>
      <Games games={games} />
    </>
  );
}
