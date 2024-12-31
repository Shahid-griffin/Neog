import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Headers from "./components/Headers";

export default function App() {
  return (
    <>
      <Headers />
      <main className="container">
        <h1 className="pt-4">Featured Products</h1>
        <div className="row ">
          <div className="col-md-4">
            <div className="card" >
            <img src="https://placehold.co/400x300" className="card-img-top" alt="product 1" />
            <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text"> 
                  Description  of Product 1.Lorem ipsum dolor ist armnt ,conelleryt ,djoslki.
                </p>
                <Link to='/product/1' className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" >
            <img src="https://placehold.co/400x300" className="card-img-top" alt="product 1" />
            <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text"> 
                  Description  of Product 2.Lorem ipsum dolor ist armnt ,conelleryt ,djoslki.
                </p>
                <Link to='/product/2' className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" >
            <img src="https://placehold.co/400x300" className="card-img-top" alt="product 1" />
            <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text"> 
                  Description  of Product 3.Lorem ipsum dolor ist armnt ,conelleryt ,djoslki.
                </p>
                <Link to='/product/3' className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
