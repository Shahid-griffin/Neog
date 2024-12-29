import Header from "./components/Headers";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
    <Header />
    <main className="container py-4">
      <h1>Latest Listing</h1>
      <img
        src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1460&h=780&dpr=1"
        className="img-fluid w-100 rounded py-4"
        alt="house 1"
      />
      <h3> Cozy Loft in the City Center </h3>
      <p>Entire loft .2 guests-1 bedroom. 1bed 1 bath</p>
      <p>Enjoy your stay in this stylish loft apartment  located in the heary of the city
        .Close to restaurents, stops , and attractions ,it's the perfect base for exploring the city 
      </p>
      <p>$120 per night</p>
      <img
          src="https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="img-fluid w-100 rounded  py-4"
          alt="image 2"
        />

      <h3>Beachfront Villa with Stunning Views </h3>
      <p>Entire Villa - 6 guests - 3 bedroom -3 beds -2 baths</p>
      <p>Enjoy your stay in this stylish loft apartment  located in the heary of the city
        .Close to restaurents, stops , and attractions ,it's the perfect base for exploring the city 
      </p>
      <p>$300 per night</p>
        
    </main>
    <Footer/>
    </>
  );
}
