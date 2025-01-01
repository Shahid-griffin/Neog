import { Link } from "react-router-dom";
export default function Headers() {
  return (
    <>
      <header className="bg-dark text-white ">
        <div className="container ">
          <h1 className="py-5">My Social Media</h1>

          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className={"nav-link"} to="/">
                  Home
                </Link>
              </li>

              <li className="nav-items">
                <Link className={"nav-link"} to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
