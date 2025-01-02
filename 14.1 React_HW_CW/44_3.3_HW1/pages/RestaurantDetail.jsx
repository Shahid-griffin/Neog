import { useLoaderData } from "react-router-dom"; // React Router hook for accessing loader data
import Header from "../components/Header"; // Header component
import Footer from "../components/Footer"; 

export async function restLoader({ params }) {
  const restaurants = [
    {
      id: "1",
      name: "The Golden Spoon",
      cuisine: "Italian",
      location: "123 main street , Cityville",
      rating: 4.5,
      description: "Experience authentic Italian cuisine in a cozy atmosphere",
      menu: [
        { name: "Spaghetti Carbonara", price: "$15" },
        { name: "Margherita Pizza", price: "$12" },
        { name: "Tiramisu", price: "$8" },
      ],
    },
    {
      id: "2",
      name: "Spice Junction",
      cuisine: "Indian",
      location: "123 main street , Cityville",
      rating: 4.5,
      description: "Experience authentic Indian cuisine in a cozy atmosphere",
      menu: [
        { name: "Chicken Tikka", price: "$15" },
        { name: "Samosa", price: "$12" },
        { name: "Gulab Jamun", price: "$8" },
      ],
    },
    {
      id: "3",
      name: "Sushi Delight",
      cuisine: "Japanese",
      location: "789 main street , Cityville",
      rating: 4.7,
      description: "Experience authentic Japanese cuisine in a cozy atmosphere",
      menu: [
        { name: "Noodles", price: "$18" },
        { name: "Miso Soup", price: "$15" },
        { name: "Sushi", price: "$80" },
      ],
    },
  ];

  return restaurants.find((restaurant) => restaurant.id === params.restId);
}

export default function RestaurantDetails() {
  const selectedBlog = useLoaderData(); // Retrieve the loaded restaurant data from the loader

  if (!selectedBlog) {
    return <div>Restaurant not found</div>; // Handle case where no restaurant is found
  }

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{selectedBlog.name}</h1>
        <p>Cuisine: {selectedBlog.cuisine}</p>
        <p>Location: {selectedBlog.location}</p>
        <p>Rating: {selectedBlog.rating}</p>
        <p>{selectedBlog.description}</p>
        <hr />
        <h3>Menu</h3>
        <div className="row">
          {selectedBlog.menu.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
