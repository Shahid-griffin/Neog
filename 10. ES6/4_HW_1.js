/*1. Write a program to increment age by 1 if birthday.

  const isBirthday = true;
  // your code here


  console.log("Program 1:");
  console.log(`Current Age: ${age}`);
  console.log("\n");*/
const isBirthday = true;
let Age = 12;

if (isBirthday === true) {
  Age++;
}

console.log(`Current age : ${Age}`);

//   ********************************************

/*2. The condition has been written to print the message. 
Declare all the necessary variables needed and calculate ticket price based on age. 
Use appropriate declarations. If the passenger age is greater than 60,
 then there is a 15% discount on the ticket price.

// your code here


  if (passengerAge > 60) {
    console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
  } else {
    console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
  }
  console.log("\n");*/

  let passengerAge = 6
  let ticketPrice = 200
  if(passengerAge > 60){
    const discountedPrice = ticketPrice  * 0.6
    console.log(`Ticket price for age greater than 60: ${discountedPrice}`)
  }else{
    console.log(`Ticket price for age less than 60 or equal to 60: ${ticketPrice}`)
  }

//   ***********************************************
/*3. Declare three variables, num1, num2 and num3 and write a program to
 find out if third number the largest. Print appropriate message as per the values taken.

Output for question 1, 2 and 3:*/

let num1=200 ,num2=500, num3=55
if(num1 >= num2 && num1 >= num3){
    console.log(`The first Number ${num1} is the greatest`)
}else if( num2 >= num3 && num2 >= num3){
    console.log(`The secondNumber ${num2} is the greatest`)
}else{
    console.log(`The third Number ${num3} is the greatest`)
}

/* 4. Define four items (Saree, Kurta, Jeans, Shoes) and their respective prices in a shopping cart. 
Use appropriate variable declarations. Calculate the total cart price by summing up the individual prices of all items.

Determine the delivery charge status based on the total cart price. 
If the total cart price is less than 1999, set an optional delivery charge of 99 and update the total cart price accordingly.
 If the total cart price is 1999 or more, indicate "No Delivery Charge" in the delivery charge status. 
Finally print the Shopping Cart with Optional Delivery Charge.*/

const Saree=500, Kurta = 600,Jeans = 40 ,Shoes = 640
let deliveryCharge, total
console.log("Shopping Cart: ")
console.log("--------------------------")
console.log(`Item: Saree, Price: ${Saree}`)
console.log(`Item: Kurta, Price: ${Kurta}`)
console.log(`Item: Jeans, Price: ${Jeans}`)
console.log(`Item: Shoes, Price: ${Shoes}`)
console.log("--------------------------")
total = Saree+Jeans+Kurta+Shoes
if(total < 1999){
    deliveryCharge = 99
}else{
    deliveryCharge = "No Delivery Charge"
}
console.log(`Delivery Charge: ${deliveryCharge}`)
console.log("--------------------------")
console.log(`Total Cart Price: ${total}`)

// *****************************************************
/*5. Declare appropriate variable and write code to check if a number is positive or negative.

If the number is greater than zero, print a message indicating that the number is positive.
If the number is less than zero, print a message indicating that the number is negative.
If the number is exactly zero, print a message indicating that the number is zero. */


let variable = 0

if(variable > 0){
    console.log("Variable is positive")
}else if(variable === 0){
    console.log("variable is zero")
}else{
    console.log("Variable is negative")
}
// *****************************************************
/*6. Find the students with highest marks. Declare three variables marks1, marks2 and marks3 to represent 
the marks of three students. Assign them the values 85, 90, and 78, respectively. 
Declare three variables for student names student1, student2 and student3.
 Assign them the values Rahul, Priya, and Tina, respectively.

If student1 has the highest marks, print a message to the console indicating that student 1 has 
the highest marks, in the following format: "Rahul has the highest marks: {marks1}". 
Print similar message if any other student has highest marks. */

let marks1=85 ,marks2 = 90 , marks3 = 78
let student1 = "Rahul" , student2 = "Priya" ,student3 = "Tina"

if( marks1 > marks2  && marks1 >marks3){
    console.log(`${student1} has the highest marks: ${marks1}`)
}else if(marks2 > marks3 && marks2 > marks1){
    console.log(`${student2} has the highest marks: ${marks2}`)
}else{
    console.log(`${student3} has the highest marks: ${marks3}`)
}