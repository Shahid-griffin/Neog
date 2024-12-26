import "./App.css";

//1. Create a React component called ReverseArray, which has a function to return the reversed array. Use reverse method to achieve that.

const ReverseArray = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const reversedArr = arr.reverse();
  return (
    <div>
      <h1>Reverse Array</h1>
      <p>Original Array: {arr.join(", ")}</p>
      <p>Reversed Array: {reversedArr.join(", ")}</p>
    </div>
  );
};

//2. Create a React component called CalculateBMI, which has a function to calculate the bmi. BMI is calculated as weight divided by the square of height. Weight is 70 kg and height is 1.75 m.

const CalculateBMI = () => {
  const getBmi = (weight, height) => {
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
  };

  const weight = 70;
  const heigth = 1.75;
  return <p>BMI: {getBmi(weight, heigth)}</p>;
};

//3. Create a React component called GenerateQuote, which has a function to display random quote from a given array of quotes.

const GeneratQuote = () => {
  const getQoute = (arr) => {
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
  };
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  ];
  return (
    <>
      <p>{getQoute(quotes)}</p>
    </>
  );
};

// 4. Create a React component called GradeAnalyser, which has a function that takes a student's score and displays a grade along with a corresponding message. Pass the score 85 as argument. Assume the grading scale is as follows:

const GradeAnalyser = () => {
  // Function to calculate grade and message based on score
  const getGradeAndMessage = (score) => {
    if (score >= 90 && score <= 100) {
      return { grade: "A", message: "Excellent work!" };
    } else if (score >= 80 && score < 90) {
      return { grade: "B", message: "Good job!" };
    } else if (score >= 70 && score < 80) {
      return { grade: "C", message: "Not bad, keep it up!" };
    } else if (score >= 60 && score < 70) {
      return { grade: "D", message: "You passed, but aim higher next time." };
    } else {
      return {
        grade: "F",
        message: "Sorry, you didn't pass. Keep working hard!",
      };
    }
  };

  // Score to be analyzed
  const score = 80;

  // Get grade and message for the given score
  const { grade, message } = getGradeAndMessage(score);

  return (
    <div>
      <h1>Grade Analyser</h1>
      <p>Score: {score}</p>
      <p>Grade: {grade}</p>
      <p>Message: {message}</p>
    </div>
  );
};

//Create a React component named TemperatureFeedback, which has a function that takes the current temperature  as parameter and provides feedback based on the temperature range. Take temperature as 25. Assume the following temperature categories:

const TemperatureFeedback = () => {
  const getFeedback = (temperature) => {
    if (temperature < 0) {
      return "Brr, it's freezing!";
    } else if (temperature >= 0 && temperature < 10) {
      return "It's quite cold, bundle up!";
    } else if (temperature >= 10 && temperature < 20) {
      return "The weather is cool and comfortable.";
    } else if (temperature >= 20 && temperature < 30) {
      return "It's a warm day!";
    } else {
      return "It's hot outside, stay cool!";
    }
  };

  const temperature = 25;
  const feedback = getFeedback(temperature);
  return (
    <>
      <p>Current Temperature: {temperature} degree celcius</p>
      <p>{feedback}</p>
    </>
  );
};

export default function App() {
  return (
    <>
      <ReverseArray />

      <h1>Random Qoute</h1>
      <GeneratQuote />

      <h1>BMI Calculator</h1>
      <CalculateBMI />
      <GradeAnalyser />

      <h1>Temperature Feedback</h1>
      <TemperatureFeedback />
    </>
  );
}
