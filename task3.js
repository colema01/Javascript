/* Lesson 3 */

/* FUNCTIONS */

// Using function declaration, define a function named add that takes two arguments, number1 and number2
function add (number1, number2){

    return parseFloat (number1) + parseFloat (number2); 
};
// In the function, return the sum of the parameters number1 and number2
// DONE
// Define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers()
{
    let number1 = document.querySelector('#addend1').value;
    let number2 = document.querySelector('#addend2').value;
    let answer = add(number1, number2);


// Assign the return value to an HTML form element with an ID of sum

document.querySelector('#sum').value = answer;
console.log(answer)

}

// Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

function subtract (number1, number2){

    return parseFloat (number1) - parseFloat (number2); 
};

function subtractNumbers()
{
    let number1 = document.querySelector('#minuend').value;
    let number2 = document.querySelector('#subtrahend').value;
    let answer = subtract(number1, number2);


document.querySelector('#difference').value = answer;
console.log(answer)

}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

// Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

function multiply (number1, number2){

    return parseFloat (number1) * parseFloat (number2); 
};

function multiplyNumbers()
{
    let number1 = document.querySelector('#factor1').value;
    let number2 = document.querySelector('#factor2').value;
    let answer = multiply(number1, number2);


document.querySelector('#product').value = answer;
console.log(answer)

}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

// Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide (number1, number2){

    return parseFloat (number1) / parseFloat (number2); 
};

function divideNumbers()
{
    let number1 = document.querySelector('#dividend').value;
    let number2 = document.querySelector('#divisor').value;
    let answer = divide(number1, number2);


document.querySelector('#quotient').value = answer;
console.log(answer)

}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


// Test all of the mathematical functionality of the task3.html page.
// DONE

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();
// Step 2: Declare a variable to hold the current year

let year = date.getFullYear();

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.getElementById("year").innerHTML = year;

/* ARRAY METHODS */
var num = Array.from(Array(26).keys()).slice(1);

document.getElementById("array").innerHTML = num;

let oddNum = num.filter(n => n%2)
console.log(oddNum)

document.getElementById("odds").innerHTML = oddNum;

let evenNum = num.filter(n => n%2===0)
console.log(evenNum)

document.getElementById("evens").innerHTML = evenNum;

document.getElementById("sumOfArray").innerHTML = num.reduce(sum);

function sum(total, num) {
  return total + num;
}

var x = num.map(function(x) { return x * 2; });
document.getElementById("multiplied").innerHTML = x

const y = num
  .map(function(x) { return x * 2; })
  .reduce(sum) 
  function sum(total, num) {
    return total + num;
  }

console.log();
document.getElementById("sumOfMultiplied").innerHTML = y
