import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-dark text-light ">
    <div className="container ">
      <h1 className="py-4">My Food Delivery Website</h1>
      <nav className="navbar ">
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
