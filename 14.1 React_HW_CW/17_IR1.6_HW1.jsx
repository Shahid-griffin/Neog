import "./App.css";

//1. Create a React component called GenerateGreeting, which has a function to return the Greeting. - "Hello John!". Pass the user name as argument.

const GenerateGreeting = () => {
  const greeting = (name) => {
    return `Hello ${name}!`;
  };
  const userName = "john";
  return (
    <div>
      <h1>{greeting(userName)}</h1>
    </div>
  );
};
//2. Create a React component called CalculateArea, which has a function to calculate the area of a rectangle. Length of the rectangle is 10 cm and width of the rectangle is 5 cm.

const CalculateArea = () => {
  const rectangleArea = (length, breadth) => {
    return length * breadth;
  };
  const length = 10;
  const widht = 5;
  return (
    <>
      <p>Rectangle Area: {rectangleArea(length, widht)}</p>
    </>
  );
};

//3. Create a React component called CalculatePerimeter, which has a function to calculate the perimeter of a rectangle. Length of the rectangle is 10 cm and width of the rectangle is 5 cm.

const CalculatePerimeter = () => {
  const rectanglePeri = (length, breadth) => {
    return 2 * (length + breadth);
  };
  const length = 10;
  const widht = 5;
  return (
    <>
      <p>Rectangle Perimeter: {rectanglePeri(length, widht)}</p>
    </>
  );
};

//4. Create a React component called GenerateMessage, which has a function to get the hours of the day and based on that displays appropriate message.
//Use the date method getHours to get the hours. If hours is less than 12 then show the message "Good Morning!".
//If hours is less than 18 then show the message "Good Afternoon!". And if hours is 18 or above then show the message "Good Evening!"

const GenerateMessage = () => {
  const getHoures = (hour) => {
    if (hour < 12) {
      return "Good Morning!";
    } else if (hour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };
  const hour = new Date().getHours();
  return (
    <>
      <h1>{getHoures(hour)}</h1>
    </>
  );
};

//5. Create a React component named CalculateVolume, to find the volume of cylinder. The radius of the cylinder is 3 cm and height is 5 cm.
const CalculateVolume = () => {
  const cylinderVol = (radius, height) => {
    const vol = Math.PI * radius * radius * height;
    return vol;
  };
  const radius = 3;
  const height = 5;
  return (
    <>
      <p>Volume of cylinder: {cylinderVol(radius, height)}</p>
    </>
  );
};

export default function App() {
  return (
    <>
      <GenerateGreeting />
      <CalculateArea />
      <CalculatePerimeter />
      <GenerateMessage />
      <CalculateVolume />
    </>
  );
}
