import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <>
      <header className="bg-dark text-white">
        <div className="container">
          <h1 className="py-4">Ecommerce Website</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className={"nav-link"} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} to="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
