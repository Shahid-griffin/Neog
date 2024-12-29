import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
function Blog() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Blogs</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5>Blog 1</h5>
                <p className="card-text">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
                <Link to="/blog/1" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5>Blog 2</h5>
                <p className="card-text">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
                <Link to="/blog/2" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className=" col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5>Blog 3</h5>
                <p className="card-text">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
                <Link to="/blog/3" className="btn btn-primary">
                  Read More
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
export default Blog;
