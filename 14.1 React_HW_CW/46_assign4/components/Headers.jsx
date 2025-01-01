import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="bg-dark text-white">
        <div className="container">
          <h1 className="py-4">Todos</h1>
          <ul className="nav">
            <li className="nav-item">
              <Link className={"nav-link"} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link"} to="/todo">
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link"} to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
