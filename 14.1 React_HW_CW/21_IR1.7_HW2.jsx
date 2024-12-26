import "./App.css";

// 1. Create a React component called CreditCardPayment which takes a prop amount. If the amount is more than 1000 show a message "Please use your credit card for payment." otherwise show the message "You can pay using cash or debit card."

const CredeitCardPayment = ({ amount }) => {
  return (
    <p>
      {amount > 1000
        ? "Please use your credit card for payment."
        : "You can pay using cash or debit card."}
    </p>
  );
};

//2. Create a React component called ProductAvailability which takes a prop inStock. If the product is in stock, show the message "The product is available. Order now!" otherwise show the message "Sorry, the product is currently out of stock."

const PorductAvailability = ({ inStock }) => {
  return (
    <p>
      {inStock
        ? "The product is available. Order now!"
        : "Sorry, the product is currently out of stock."}
    </p>
  );
};

// 3. Create a React component called TrafficLight which takes a prop color. If the color is red then show the message "Stop! The light is red." otherwise show the message "Go! The light is green."

const TrafficLight = ({ color }) => {
  return (
    <p>
      {color === "red" ? "Stop! The light is red." : "Go! The light is green."}
    </p>
  );
};

//4. Create a React component called MembershipStatus which takes a prop isPremium. If the membership is premium then show a message "Welcome, Premium Member!" otherwise show a message "Upgrade to premium for exclusive benefits."

const MembershipStatus = ({ isPremium }) => {
  return (
    <p>
      {isPremium
        ? "Welcome, Premium Member!"
        : "Upgrade to premium for exclusive benefits."}
    </p>
  );
};

// 5. Create a React component called WeatherReport which takes a prop isSunny. If it is sunny then show a message "It is sunny today." otherwise show the message "It is not sunny today."

const WeatherReport = ({ isSunny }) => {
  return <p>{isSunny ? "It is sunny today." : "It is not sunny today."}</p>;
};

export default function App() {
  return (
    <main>
      <CredeitCardPayment amount={5000} />
      <PorductAvailability inStock={true} />
      <TrafficLight color="red" />
      <MembershipStatus isPremium={true} />
      <WeatherReport isSunny={true} />
    </main>
  );
}
