import { NavLink } from "react-router-dom";
const Header = () => (
  <header className="bg-dark text-light">
    <div className="container py-4">
      <h1>My Blogging Website</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
export default Header;
