import "./App.css";

//1. Create a React component called RandomNumber, which shows a random number between 1 to 100.

const RandomNumber = () => {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  return (
    <div>
      <p>Random Number: {randomNumber}</p>
    </div>
  );
};

const AbsoluteValue = () => {
  const number = -10;

  // Calculate the absolute value of the number
  const absoluteValue = Math.abs(number);

  return (
    <div>
      <p>Absolute Value: {absoluteValue}</p>
    </div>
  );
};

const SumOfEvenNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  let sumOfEvens = 0;

  // Using a for loop to calculate the sum of even numbers
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sumOfEvens += numbers[i];
    }
  }

  return (
    <div>
      <p>Sum of Even Numbers: {sumOfEvens}</p>
    </div>
  );
};

//4. Create a React component, to find the perimeter of a square. The sides of square is 5 cm in length.
const PerimeterOfSquare = () => {
  const side = 5;
  const perimeter = side * 4;
  return (
    <div>
      <p>Side Length: {side}</p>
      <p>Perimeter:{perimeter}</p>
    </div>
  );
};

//5. Create a React component named CurrencyConverter to convert an amount from US Dollars (USD) to Indian Rupee (INR). The amount is $50. Assuming an exchange rate of 1 USD = 74.5.

const CurrencyConverter = () => {
  const usdAmount = 50;
  const exchangeRate = 74.5;

  // Convert USD to INR
  const inrAmount = usdAmount * exchangeRate;

  return (
    <div>
      <p>Amount in USD: ${usdAmount}</p>
      <p>Exchange Rate: 1 USD = {exchangeRate} INR</p>
      <p>Amount in INR: INR {inrAmount} </p>
    </div>
  );
};

export default function App() {
  return (
    <>
      <RandomNumber />
      <AbsoluteValue />
      <SumOfEvenNumbers />

      <h1>Square Perimiter Calculator</h1>
      <PerimeterOfSquare />

      <h1>Currency Converter</h1>
      <CurrencyConverter />
    </>
  );
}
