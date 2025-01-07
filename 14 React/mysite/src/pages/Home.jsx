import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
    <main className="container py-4">
      <div>
        <img
          src="https://placehold.co/500x300?text=Employee+Smiling"
          alt="Employee"
          className="img-fluid"
        />
      </div>

      <div className="py-4">
        <h2>Our Employees</h2>
        <p>
          Meet our dedicated team of professional who work tirelessly to achieve
          our Company's goals.
        </p>
        <Link className="btn btn-primary" to="/employee">
          View Employee
        </Link>
      </div>

      <div className="py-4">
        <h2>Company Report</h2>
        <p>
          Explore our latest financial report to gain insights into our Company
          performance and growth
        </p>
        <Link className="btn btn-primary" to="/report">
          View Report
        </Link>
      </div>
    </main>
      <Footer />
  
    </>
    );
};

export default Home