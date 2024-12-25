import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome to Our Website</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const PhoneDetail = ({ phone }) => {
  return (
    <div>
      <h2>{phone.name}</h2>
      <p>Category: {phone.category}</p>
      <p>Price: {phone.price}</p>
      <p>Stock: ${phone.stock}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2024 Our Company All right Reserved</p>
    </footer>
  );
};

export default function App() {
  const phone = {
    name: "Smartphone",
    category: "Electronics",
    price: 799.99,
    stock: 100,
  };
  return (
    <>
      <Header />
      <main>
        <PhoneDetail phone={phone} />
      </main>
      <Footer />
    </>
  );
}
