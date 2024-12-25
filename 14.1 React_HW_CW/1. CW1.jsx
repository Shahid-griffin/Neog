import './App.css';

//definfing new com
const Greeting = () =>{
  return <h1>Hello,Jon</h1>
}

//using dynamic  
const name ="shahid"
const Dynamic = () =>{
  return <h1>Hello , {name}!</h1>
}


// Define the MyComponent component
const MyComponent = () => {
  return <h1>Hello JS</h1>; // Return a heading ignore () if its one line
};


//link 
const LinkTag = () =>{
  const url = "http://exmaple.com"
  return <a href={url} target='_blank'>Visit Exmaple </a>
}

//dislpay image

const ImageTag = () => {
  const imageUrl = "http://via.placeholder.com/150"
  return(
  <div>
    <img src={imageUrl} alt ="placehioldeR" />
  </div>
  )
}

// profile detail 
const ProfileDetail = () =>{
  const details = {
    name : "john",
    age :25,
    email : "john@gmail.com",
    bio : "Hey im looking for  job"
  }

  return (
    <div>
      <h2>Profile Details</h2>
      <p>Name : {details.name}</p>
      <p>Age : {details.age}</p>
      <p>email : {details.email}</p>
      <p>Bio : {details.bio}</p>
    </div>
  )
}

// Define the App component
function App() {
  return (
    <div>
      {/* Rendering JSX */}
      <MyComponent />
      <Greeting />
      <Dynamic />
      <LinkTag />
      <ImageTag />
      <ProfileDetail />
    </div>
  );
}

// Export the App component at the end
export default App;
