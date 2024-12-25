import "./App.css";

// 1. Create a React component called WelcomeMessage to display the message
//"Welcome, Emily!". Pass the user name, Emily as props.

const WelcomeMessage = (props) => {
  return (
    <div>
      <h1>Welcome,{props.name}!</h1>
    </div>
  );
};

// 2. Create a React component called BookDetails to display the following details. Pass the book data object as props.

const BookDetails = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Author :{props.author}</p>
      <p>Genre :{props.genre}</p>
    </div>
  );
};

//3. Create a React component called ArticleInformation to display the following details. Pass the article data object as props.

const ArticleInformation = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Published Dates : {props.publishedDate}</p>
    </div>
  );
};

//4. Create a React component called ProductDetails to display the following details. Pass the product data object as props.

const ProductDeatils = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: {props.price}</p>
    </div>
  );
};

//5. Create a React component called EventDetails to display the following details. Pass the event data object as props.

const EventDetails = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Location: {props.location}</p>
      <p>Date: {props.date}</p>
    </div>
  );
};

//6. Create a React component called UserProfile to display the name and avatar image. Pass the name and avatar URL as props.

const UserProfile = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <img src={props.img} alt={props.alt} />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <WelcomeMessage name="Emily" />

      <h1>Book Details</h1>
      <BookDetails
        title="To Kill a Mockingbird"
        author="Harper Lee"
        genre="Classic"
      />

      <h1>Article Information</h1>
      <ArticleInformation
        title="The Power of Habit"
        author="Charles Duhigg"
        publishedDate="March 1, 2024"
      />

      <h1>Product Details</h1>
      <ProductDeatils name="Smartphone" brand="Samsung" price={799.99} />

      <h1>Event Details </h1>
      <EventDetails
        title="Tech Conference 2024"
        location="San Francisco"
        date="April 15, 2024"
      />

      <h1>User Profile</h1>
      <UserProfile
        name="Chris"
        img="https://via.placeholder.com/250"
        alt="placehold"
      />
    </div>
  );
}
