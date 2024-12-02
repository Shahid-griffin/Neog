/*1. Create a function called calculateSalary that takes two arguments called hoursWorked and hourlyRate. 
Inside the function, calculate the total salary. Return the salary.
 Call the function with two arguments and console.log the result. */
function calculateSalary(hoursWorked, hourlyRate) {
  let totalSalary;
  totalSalary = hourlyRate * hoursWorked;
  return totalSalary;
}

let totalSalary = calculateSalary(100, 4);
console.log(`Total salary is ${totalSalary}`);

/*2. Create a function called `calculateBonus` that takes three arguments called
   `workedHours`, `marks`, and `salary`. 
  Use appropriate variable declarations. Inside the function,
  check the eligibility for a bonus based on the following criteria:

- If `workedHours` is greater than 25 and `marks` is greater than 85, calculate a 10% bonus
 on the `salary` and return the updated salary.

- If `workedHours` is greater than 15 and `marks` is greater than 75, calculate a 5% bonus
 on the `salary` and return the updated salary.

- If none of the above conditions are met, return the `salary` without any bonus.

// code to call the function
console.log(calculateBonus(20, 80, 5000));
 */
function calculateBonus(workedHours, marks, salary) {
  let updatedSalary = salary;
  if (workedHours > 25 && marks > 85) {
    updatedSalary = salary * 1.1;
  } else if (workedHours > 15 && marks > 75) {
    updatedSalary = salary * 1.05;
  }

  return updatedSalary;
}

let total_Salary = calculateBonus(20, 80, 5000);
console.log(`Total Salary is  : ${total_Salary}`);

/*  3. Create a function called calculateFinalAmount that calculates the final amount of a cart. 
The function takes four arguments called price1, quantity1, price2 and quantity2.
 Inside the function, calculate the total price of quantity1 and 
 add it to the total price of quantity2 to get the final amount. 
 Return the total amount. Use appropriate variable declarations.

// code to call the function
console.log(calculateFinalAmount(200, 10, 500, 5));*/

function calculateFinalAmount(price1, quantity1, price2, quantity2) {
  let finalAmount, amount1, amount2;
  amount1 = price1 * quantity1;
  amount2 = price2 * quantity2;

  finalAmount = amount1 + amount2;
  return finalAmount;
}

let finalAmount = calculateFinalAmount(200, 10, 500, 5);
console.log(`final amount is ${finalAmount}`);

/*4. Create a function called calculateAllowance that takes three arguments: age, isStudent and baseAllowance. 
Inside the function, determine the additional allowance based on the following criteria:

If age is less than 18 and isStudent is true, add 100 to the baseAllowance and return the updated allowance.
If age is between 18 and 25 (inclusive of both 18 and 25) and isStudent is true, add 50 to the baseAllowance and 
return the updated allowance.
If none of the above conditions are met, return the original baseAllowance.
Call the function with three arguments (age as 16, isStudent as true and base allowance as 500). 
Print the final output. Use appropriate variable declarations.
*/

function calculateAllowance(age, isStudent, baseAllowance) {
  let updatedAllowance = baseAllowance;
  if (age < 18 && isStudent === true) {
    updatedAllowance = baseAllowance + 100;
  } else if (age >= 18 && age <= 25 && isStudent === true) {
    updatedAllowance = baseAllowance + 50;
  }
  return updatedAllowance;
}

let ans = calculateAllowance(16, true, 500);
console.log(`answer is the : ${ans}`);

/*5. Create a function called calculateShippingCost that takes three arguments: totalWeight, country, and baseCost. 
Inside the function, calculate the shipping cost based on the following criteria:

If totalWeight is less than or equal to 1 kg and country is "Local", add 10 to the baseCost and return the updated cost.
If totalWeight is greater than 1 kg and country is "International", add 20 to the baseCost and return the updated cost.
If none of the above conditions are met, return the baseCost without any additional charges.
Call the function with three arguments (total weight as 0.5, country as “Local” and base cost as 50). Print the final output. 
Use appropriate variable declarations.
 */
function calculateShippingCost(totalWeight, country, baseCost) {
  let updatedValue = baseCost;
  if (totalWeight <= 1 && country === "local") {
    updatedValue += 10;
  } else if (totalWeight > 1 && country === "international") {
    updatedValue += 20;
  }
  return updatedValue;
}

let shippingCost = calculateShippingCost(0.5, "local", 50);
console.log(`total shippment cost is : ${shippingCost}`);
