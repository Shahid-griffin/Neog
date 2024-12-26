import "./App.css";
//1. Create a React component called UserStatus which takes a prop isOnline. If the user is online show a message "Use is online" otherwise show the message "User is offline"

const UserStatus = ({ isOnline }) => {
  return <p>{isOnline ? "User is online" : "User is offline"}</p>;
};

//2. Create a React component called DayOfWeek which takes a prop isWeekend. If it is a weekend show the message "Enjoy your weekend!" otherwise show the message "Have a great day!".

const DayOfWeek = ({ isWeekend }) => (
  <p>{isWeekend ? "Enjoy your weekend!" : "Have a great day!"} </p>
);

//3. Create a React component called ShoppingCart which takes a prop itemCount. If the itemCount is more than 0 then show the message "You have <itemCount> items in your cart" otherwise show a message "Your cart is empty".

const ShippingCart = ({ itemCount }) => {
  return (
    <p>
      You have {itemCount > 0 ? itemCount : "Your cart is empty"} items in your
      cart
    </p>
  );
};

// 4. Create a React component called DiscountOffer which takes a prop isPrimeMember. If the user is a prime member then show a message "You're eligible for a 20% discount" otherwise show a message "Become a prime member for exclusive discounts".

const DiscountOffer = ({ isPrimeMember }) => {
  return (
    <p>
      {isPrimeMember
        ? "You're eligible for a 20% discount"
        : "Become a prime member for exclusive discounts"}
    </p>
  );
};

// 5. Create a React component called ShowError which takes a prop showError. If showError is applicable then show a message "An error occurred. Please try again later."

const ShowError = ({ showError }) => {
  return (
    <p>
      {showError ? "An error occurred. Please try again later." : "No error"}
    </p>
  );
};

export default function App() {
  return (
    <main>
      <UserStatus isOnline={true} />
      <DayOfWeek isWeekend={true} />
      <ShippingCart itemCount={5} />
      <DiscountOffer isPrimeMember={true} />
      <ShowError showError={false} />
    </main>
  );
}
