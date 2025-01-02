import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-dark text-light">
    <div className="container py-3">
      <h1>My Food Delivery Website</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className={"nav-link"} to="/">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={"nav-link"} to="/rest">
              Restaurant
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={"nav-link"} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </header>
  );
}
