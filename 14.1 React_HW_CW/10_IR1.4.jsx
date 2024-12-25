import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome To our Company</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const EmployeeDetails = ({ employee }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <p>Email: {employee.email}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Comapny name. All right Reserved</p>
    </footer>
  );
};

export default function App() {
  const employee = {
    id: 1,
    name: "john ",
    position: "Engineering",
    department: "Software engg",
    email: "john@gmail.com",
  };
  return (
    <>
      <Header />
      <main>
        <EmployeeDetails employee={employee} />
      </main>
      <Footer />
    </>
  );
}
