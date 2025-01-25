import "./App.css";

// hoe to display array of object when pass throught props

// list the data in Dom

//  this willnot render any data on the  this we are mapping product array and writing our Html
//use of filter in CW 2.2
const ProductList = ({ products }) => {
  const filterProduct  = products.filter(product => product.price >=20 && product.price <=50)
const productListing = filterProduct.map((product) => (
    <div key={product.id}>
    {/* we have to give the key attribute when using Map or it twill give warning  */}
    <h3>Name: {product.name}</h3>
    <p>Price: {product.price}</p>
    </div>
));

return (
    <>
    <h2>Products</h2>
    {productListing}
    </>
);
};

const Restaurants = ({ restaurants }) => {
  const filteRes = restaurants.filter((res)=> res.cuisine==="Italian")
const restaurantListing = filteRes.map((restaurant) => (
    <div key={restaurant.id}>
    <h3>Name: {restaurant.name}</h3>
    <p>Cuisine: {restaurant.cuisine}</p>
    </div>
));
return (
    <>
    <h2>Restaurants</h2>
    {restaurantListing}
    </>
);
};

const Videos = ({ videos }) => {
  const filterVid = videos.filter((vid)=> vid.views > 1000)
const videoListing = filterVid.map((video) => (
    <div key={video.id}>
    <h3>Ttile: {video.title}</h3>
    <p>View:{video.views}</p>
    </div>
));
return (
    <>
    <h2>Videos</h2>
    {videoListing}
    </>
);
};

export default function App() {
const products = [
    { id: 1, name: "product 1", price: 19.99 },
    { id: 2, name: "product 2", price: 29.99 },
    { id: 3, name: "product 3", price: 39.99 },
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
    <>
    <ProductList products={products} />
    <hr />
    <Restaurants restaurants={restaurants} />
    <hr />
    <Videos videos={videos} />
    </>
);
}
