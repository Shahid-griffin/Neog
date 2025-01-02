import { Link } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";

const products = [
  {
    id: "1",
    name: "Product 1",
    description:
      "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$99.99",
    availableColors: ["Red", "Blue", "Green"],
    isReturnApplicable: true,
    productImageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "2",
    name: "Product 2",
    description:
      "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$129.99",
    availableColors: ["White", "Black"],
    isReturnApplicable: true,
    productImageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "3",
    name: "Product 3",
    description:
      "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$79.99",
    availableColors: ["Yellow"],
    isReturnApplicable: false,
    productImageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "4",
    name: "Product 4",
    description:
      "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$49.99",
    availableColors: ["Purple", "Yellow"],
    isReturnApplicable: true,
    productImageUrl: "https://via.placeholder.com/300x200",
  },
];

const filteredProducts = products.filter(
  (product) => parseFloat(product.price.replace("$", "")) < 80
);

export default function Product() {
  return (
    <>
      <Headers />
      <main className="container">
        <h1 className="display-1 mt-3">Products</h1>
        <div className="row">
          {products.map((product) => (
            <div className="card mb-3" key={product.id}>
              <div className="row">
                <div className="col-md-4 p-0">
                  <img
                    src={product.productImageUrl}
                    className="img-fluid rounded-start"
                    alt={`Image of ${product.name}`}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Price: {product.price}
                      </small>
                    </p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr/>
        <h1>Affordable Products</h1>
        {filteredProducts.map((pro)=>
        <>
        <h3>{pro.name}</h3>
        <p>{pro.description}</p>
        <small className="text-body-secondary">
                        Price: {pro.price}
                      </small>
        </>)}
      </main>
      <Footer />
    </>
  );
}
