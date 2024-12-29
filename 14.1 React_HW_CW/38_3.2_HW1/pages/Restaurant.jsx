import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Restaurant() {
  return (
    <>
    <Header/>
    <main className="container py-4">
      <h1>Restaurants</h1>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid rounded-start"
              alt="image 1"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Taste of India</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Rating 4.7 | Open Now</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid rounded-start"
              alt="image 1"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Paradise</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Rating 4.5 | Open Now</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer/>
    </>
  );
}
