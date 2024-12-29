import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className=" bg-dark text-light">
        <h1 className=" container py-4">My Vacation Stays Website</h1>
        <div className="container ">
          <nav className="navbar">
            <ul className="nav">
              <li className="nav-item">
                <Link className={"nav-link"} to="/">
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} to="/stays">
                  Stays
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
