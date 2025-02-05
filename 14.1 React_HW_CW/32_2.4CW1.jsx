const Products = ({ products, productId }) => {
  const productDetails = products.find((product) => product.id === productId);

  return (
    <div>
      <h1>Product Data</h1>
      <p>Id: {productDetails.id}</p>
      <p>Name: {productDetails.name}</p>
      <p>price: ${productDetails.price}</p>
    </div>
  );
};

const Restaurants = ({ restaurants, name }) => {
  const restaurantData = restaurants.find(
    (restaurant) => restaurant.name === name
  );

  return (
    <div>
      <h1>Restaurant Data</h1>
      <p>Restaurant Name: {restaurantData.name}</p>
      <p>Cuisine: {restaurantData.cuisine}</p>
    </div>
  );
};

const Video = ({ videos, title }) => {
  const videoInfo = videos.find((video) => video.title === title);

  return (
    <div>
      <h1>Video Info</h1>
      <p>Title: {videoInfo.title}</p>
      <p>Views: {videoInfo.views}</p>
    </div>
  );
};

const App = () => {
  const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
  ];
  const restaurants = [
    { id: 1, name: "Restaurant 1", cuisine: "Italian" },
    { id: 2, name: "Restaurant 2", cuisine: "Mexican" },
    { id: 3, name: "Restaurant 3", cuisine: "Chinese" },
  ];

  const videos = [
    { id: 1, title: "Video 1", views: 1000 },
    { id: 2, title: "Video 2", views: 2000 },
    { id: 3, title: "Video 3", views: 3000 },
  ];

  return (
    <div>
      <Products products={products} productId={2} />
      <hr />
      <Restaurants restaurants={restaurants} name="Restaurant 3" />
      <hr />
      <Video videos={videos} title="Video 1" />
    </div>
  );
};

export default App;