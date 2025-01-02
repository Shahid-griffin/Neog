import Footer from "../components/Footer";
import Header from "../components/Headers";
import { useLoaderData } from "react-router-dom";

export async function stayLoader({ params }) {
  const stays = [
    {
      id: "1",
      name: "Luxurious Taj Mahal View Apartment",
      type: "Cafehouse",
      location: "123456 main street , Cityville",
      rating: 4.1,
      description: "Experience charming nestled atmosphere",
      menu: ["Kitchen", "Wifi", "Parking"],
      price: "$150/night",
    },
    {
      id: "2",
      name: "Cozy Cottage Retreat",
      type: "Cottage",
      location: "12374 main street , Cityville",
      rating: 4.2,
      description: "Experience charming nestled atmosphere",
      menu: ["Kitchen", "Wifi", "Parking"],
      price: "$140/night",
    },
    {
      id: "3",
      name: "Seaside View Private Villa",
      type: "Villa",
      location: "23 main street , Cityville",
      rating: 4.0,
      description: "Experience charming nestled atmosphere",
      menu: ["PS5", "Kitchen", "Wifi", "Parking"],
      price: "$1050/night",
    },
    {
      id: "4",
      name: "Modern Loft in the City",
      type: "City",
      location: "13 main street , CityOld",
      rating: 4.8,
      description: "Experience cold nestled atmosphere",
      menu: ["Kitchen", "Parking"],
      price: "$100/night",
    },
    {
      id: "5",
      name: "Cozy Outing in Mountains",
      type: "Cottage Mountain",
      location: "12344 main street , Cityville",
      rating: 4.4,
      description: "Experience charming need atmosphere",
      menu: ["Kitchen", "Wifi", "Parking", "water"],
      price: "$1500/night",
    },
  ];

  return stays.find((stay) => stay.id === params.stayId);
}

export default function StayDetail() {
  const selectedStay = useLoaderData();
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{selectedStay.name}</h1>
        <p>Type: {selectedStay.type}</p>
        <p>Location: {selectedStay.location}</p>
        <p>Rating: {selectedStay.rating}</p>
        <p>{selectedStay.description}</p>
        <hr />
        <h2>Amenities</h2>
        <ul>
          {selectedStay.menu.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <p>
          <strong>Price: </strong>
          {selectedStay.price}
        </p>
      </main>
      <Footer />
    </>
  );
}
