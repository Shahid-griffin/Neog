/*Question 1: Declare a variable called age with a value 20 and see 
if you are able to update the value to 22. Use appropriate variable declaration method and see 
if you are able to print the expected output to the console.

Expected Console Output:
Program 1:
Original age: 20
Updated age: 22 */

let age = 20
console.log("Program 1:\n" + "Original age: "+age)
age = 22
console.log("Updated age: " + age)

// ***************************************************************

/*Question 2: Declare two variables, num1 with a value 20 and num2 with a value 5. 
Calculate the product and difference of two values and print to the console.
 Use appropriate variable declaration method and see if you are able to print the expected output to the console.

Expected Console Output:
Program 2:
Product of num1 and num2: 100
Difference between num1 and num2: 15
*/ 

let num1 = 20 ,num2 = 5
let product = num1*num2
let difference = num1-num2

console.log("Program 2:")
console.log("Product of num1 and num2: ",product)
console.log("Difference between num1 and num2: ",difference)
console.log("\n")

/*Question 3: Declare a variable called numberOfGates with a value 5. 
numberOfGates is a constant value and you should not be able to update it.
Try to update the value to 6 and see what happens. Use appropriate variable declaration method such that you cannot update its value. 
Print the value to the console.

Question 4: Declare an object named person with two properties name and age.
 Modify the age property of the person object and update its value to 31. 
 Use appropriate variable declaration method and see if you are able to
  print the expected output to the console.
 */
  const  person ={
    name : "alice",
    age : 30
}
console.log("Program 4")
console.log("Original person: " ,person)
person.age = 31
console.log("Updated person: ",person)
console.log("\n")


/*Question 5: Declare an object named colors. 
Add a property tertiary to it and print to the console.
 Use appropriate variable declaration method.
 
 Expected Console Output:
Program 5:
Original Object: { primary: "red", secondary: "blue" }
Updated Object: { primary: "red", secondary: "blue", tertiary: "green" }*/

 const colors = {
    primary : "red",
    secondary : "blue"
 }
 console.log("Program 5")
 console.log("Original Object: ",colors)
 colors.tertiary="green"
 console.log("Updated Object: ",colors)
 console.log("\n")

 /*Question 6: What will be the output of the following code?

  const numbers = [1, 2, 3, 4]
  numbers[2] = 99
  console.log(numbers)
 */
  
  //answer [1,2,99,4]

  /*Question 7: What will be the output of the following code?

  const coordinates = { x: 10, y: 20 }
  console.log(coordinates)
  const newCoordinates = { x: 30, y: 40 }
  coordinates = newCoordinates*/

  //errror can reassign const

  /*Question 8: What will be the output of the following code?

  let obj = { a: 1, b: 2 }
  const obj2 = { a: 3, b: 4 }
  obj = obj2
  console.log(obj)
  console.log(obj2)*/
  
  // same o/p as both have been shring same memory 

/*Question 9: What will be the output of the following code?

  const numericVar = 2
  numericVar = 3*/
  
  // error 

/*Question 10: What will be the output of the following code?

  const greeting = "Hello"
  console.log(greeting)
  let name = " Jay"
  name = " Shawn"
  console.log(greeting + name)*/

  // greeting shawn

  