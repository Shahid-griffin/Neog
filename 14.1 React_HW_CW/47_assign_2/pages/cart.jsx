import Footer from "../components/Footer";
import Headers from "../components/Headers";

export default function Cart() {
  const carts = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];

  // Calculate the total price
  const totalPrice = carts.reduce(
    (acc, cart) => acc + cart.price * cart.quantity,
    0
  );

  return (
    <>
      <Headers />
      <main className="container py-3">
        <h1>Shopping Cart</h1>

        <ul className="list-group">
          {carts.map((cart) => (
            <li
              key={cart.id} // Add a unique key for each list item
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{cart.name}</h5>
                <p>Price: ${cart.price.toFixed(2)}</p>
                <p>Quantity: {cart.quantity}</p>
              </div>
              <p>
                Total: ${(cart.price * cart.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
          <hr/>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </main>
      <Footer />
    </>
  );
}
