import "./App.css";

//1. Create a React Component ProductPage, which takes some information about iPhone 15 Pro as props and display them as shown below. It also takes a prop called inStock. If the phone is in stock show a message "In Stock" else show the message "Currently out of stock".

const Headers = () => {
  return (
    <header>
      <h1>Product Page</h1>
    </header>
  );
};

// prdocut main
const ProductPage = ({ phoneprop }) => {
  // const { price,img,color, description, instock } = phone;
  return (
    <div>
      <h2>iPhone 15 Pro</h2>
      <img src={phoneprop.img} alt="iphone" />
      <p>
        <strong>Price: </strong>${phoneprop.price}
      </p>
      <p>
        <strong>Color:</strong> {phoneprop.color}
      </p>
      <p>
        <strong>Description:</strong> {phoneprop.description}
      </p>
      <p>
        <strong>
          {phoneprop.instock ? "In Stock" : "Currently out of stock"}
        </strong>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <p>&copy; 2024 Apply Inc.</p>
    </div>
  );
};

export default function App() {
  const phone = {
    price: 499.99,
    img: "https://via.placeholder.com/150",
    color: "Midnight Green",
    description:
      "The iPhone 14 Pro Max is a flagship iPhone that was released in September 2022. It features a 6.",
    instock: true,
  };
  return (
    <>
      <Headers />
      <main>
        <ProductPage phoneprop={phone} />
      </main>
      <Footer />
    </>
  );
}
