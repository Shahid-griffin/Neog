import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Headers";

export default function App() {
  return (
    <>
      <Header />
      <main className="container pt-3 text-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D"
          alt="todoimg"
          className="img-fluid rounded"
        />

        <h3 className="mt-4">Todos</h3>
        <p>Welcome to the Todo application!</p>
        <Link className="btn btn-primary mb-4" to="/todo">
          View Todo
        </Link>
      </main>
      <Footer />
    </>
  );
}
