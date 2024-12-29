import { Link } from "react-router-dom";
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
              <h5 className="card-title">The Golden Spoon</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Rating 4.7 | Open Now</small>
              </p>
              <Link to="/rest/1" className="btn btn-primary">
                  View More
                </Link>
                
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
              <h5 className="card-title">Spice Junction</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Rating 4.5 | Open Now</small>
              </p>
              <Link to="/rest/2" className="btn btn-primary">
                  View More
                </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="img-fluid rounded-start"
              alt="image 1"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Suchi Paradise</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Rating 4.5 | Open Now</small>
              </p>
              <Link to="/rest/3" className="btn btn-primary">
                  View More
                </Link>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer/>
    </>
  );
}
