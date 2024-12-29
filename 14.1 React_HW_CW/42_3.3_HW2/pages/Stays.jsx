import Footer from "../components/Footer";
import Header from "../components/Headers";
import { Link } from "react-router-dom";
export default function Stays() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Featured Stays</h1>

        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="img-fluid rounded-start"
                alt="image 1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Luxurious Taj Mahal View Apartment</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last Updated 3 min ago
                  </small>
                </p>
                <Link to="/stays/1" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="img-fluid rounded-start"
                alt="image 1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Cozy Retreat in the Mountains</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last Updated 10 min ago
                  </small>
                </p>
                <Link to="/stays/2" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5ifGVufDB8fDB8fHww"
                class="img-fluid rounded-start"
                alt="image 1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Seaside View Private villa</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last Updated 5 min ago
                  </small>
                </p>
                <Link to="/stays/3" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://media.istockphoto.com/id/1227329047/photo/two-ampty-chairs-facing-magnificent-sunset-view-at-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=A0igkvIGLJermqzOYd0NH4pelYlfGzjNEN4MzHJ-LU4="
                class="img-fluid rounded-start"
                alt="image 1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Modern Loft in the City </h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last Updated 11 min ago
                  </small>
                </p>
                <Link to="/stays/4" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1644027622521-d0ca669c40d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpcmJuYnxlbnwwfHwwfHx8MA%3D%3D"
                class="img-fluid rounded-start"
                alt="image 1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Cozy Outing in the Mountains</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last Updated 9 min ago
                  </small>
                </p>
                <Link to="/stays/5" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}