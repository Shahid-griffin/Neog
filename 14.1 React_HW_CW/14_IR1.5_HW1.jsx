import './App.css'

//1. Create a React component called ArrayOperations, which performs the following calculations on the given array

const ArrayOperations = () => {
  const numbers = [1, 2, 3, 4, 5];

  // Calculate the sum of all numbers in the array
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // Calculate the average of all numbers in the array
  const average = sum / numbers.length;

  // Find the maximum out of the numbers in the array
  const max = Math.max(...numbers);

  // Find the minimum out of the numbers in the array
  const min = Math.min(...numbers);

  return (
    <div>
      <h1>Array Operations</h1>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Sum: {sum}</p>
      <p>Average: {average}</p>
      <p>Maximum: {max}</p>
      <p>Minimum: {min}</p>
    </div>
  );
};


//2. Create a React component called ObjectManipulation, to update the age of person from 28 to 29 and display the person details. Use appropriate ES6 syntax.

const ObjectManipulation = ({person}) =>{
  person.age = 29;
  return (
    <div>
      <p>Person: {person.name}</p>
        <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </div>
  )
}


//3. Create a React component called SquareArea, to find the area of a square. The sides of square is 5 cm in length.


const SquareArea = () =>{
  const side =5
  const area = side*side
  return (
    <div>
      <p>The area of the square is: {area}</p> 
    </div>
  )
}

// 4. Create a React component called CapitalizeString, to capitalize the given string. - "hello world".

// 5. Create a React component named CircleArea, to find the area of a circle. The radius of the circle is 8 cm.

const CircleArea = () =>{
  const side =8
  const area = side*side*3.14
  return (
    <div>
      <p>The area of the Circle is: {area}</p> 
    </div>
  )
}

export default function App(){
  const person = {
    name: "Sarah",
    age: 28,
    city: "New York",
  };
  return (
    <>
    <ArrayOperations />

      <h1>Person Details</h1>
      <ObjectManipulation person={person}/>
      
      <h1>Ares of square</h1>
      <SquareArea />

      <h1>Area of circle</h1>
      <CircleArea/>
    </>
  )
}