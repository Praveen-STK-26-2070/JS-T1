// JavaScript Tasks – Type Casting & Flow Control


// Task 1 – Predict the Output

// Write the output and datatype for below:

console.log("10" + 5)             //Output = 105 ; DataType = string
console.log(10 + true)            //Output = 11 ; DataType = number
console.log(false + null)         //Output = 0 ; DataType = number
console.log("Hello" + undefined)  //Output = Helloundefined ; DataType = string
console.log([1,2] + 5)            //Output = 1,25 ; DataType = string


// Task 2 – Implicit Type Casting

// Create examples for:

// 1. String + Number
let a = "10" + 5;
console.log(a);            // Output = "105"
console.log(typeof(a));    // DataType = string

// 2. Boolean + Number
let b = true + 10;
console.log(b);            // Output = 11
console.log(typeof(b));    // DataType = number

// 3. Array + String
let c = [1, 2, 3] + " Hello";
console.log(c);            // Output = "1,2,3 Hello"
console.log(typeof(c));    // DataType = string

// 4. Object + Number
let d = {} + 5;
console.log(d);            // Output = "[object Object]5"
console.log(typeof(d));    // DataType = string

// 5. Null + Number
let e = null + 20;
console.log(e);            // Output = 20
console.log(typeof(e));    // DataType = number


// Task 3 – Explicit Type Casting

// Convert the following into Number:

// "500"
console.log(Number("500"));  // Output = 500

// true
console.log(Number(true));   // Output = 1

// false
console.log(Number(false));  // Output = 0

// null
console.log(Number(null));   // Output = 0

// "abc"
console.log(Number("abc"));  // Output = NaN

// [100]
console.log(Number([100]));  // Output = 100


// Task 4 – Boolean Constructor

// Check whether below values are true or false using Boolean().

// ""
console.log(Boolean(""));            // Output = false

// "javascript"
console.log(Boolean("javascript"));  // Output = true

// 0
console.log(Boolean(0));             // Output = false

// 1
console.log(Boolean(1));             // Output = true

// null
console.log(Boolean(null));          // Output = false

// undefined
console.log(Boolean(undefined));     // Output = false

// []
console.log(Boolean([]));            // Output = true

// {}
console.log(Boolean({}));            // Output = true


// Task 5 – Student Pass or Fail

// Take one variable:
// let mark = 45
// Condition:
// Above 35 → Pass
// Below 35 → Fail
// Use if else.

let mark = 45;

if (mark > 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// Task 6 – Voting Eligibility

// Create a variable:
// let age = 20
// Conditions:
// 18 and above → Eligible
// Otherwise → Not Eligible

let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// Task 7 – Greatest Number

// Find greatest among 3 numbers using if else if.
// Example:
// let a = 50
// let b = 80
// let c = 30

let a = 50;
let b = 80;
let c = 30;

if (a > b && a > c) {
    console.log("A is greatest");
} 
else if (b > a && b > c) {
    console.log("B is greatest");
} 
else {
    console.log("C is greatest");
}


// Task 8 – Traffic Light System

// Using switch statement:
// red → stop
// yellow → ready
// green → go

let signal = "green";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// Task 9 – Login System

// Create variables:
// let username = "admin"
// let password = "1234"
// Conditions:
// Both correct → Login Success
// Otherwise → Invalid Login
// Use nested if.

let username = "admin";
let password = "1234";

if (username === "admin") {

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Invalid Login");
    }

} else {
    console.log("Invalid Login");
}


// Task 10 – Session Finder

// Take hour value:
// let hour = 14
// Conditions:
// 1–12 → Morning
// 13–15 → Afternoon
// 16–19 → Evening
// 20–24 → Night
// Use else if.

let hour = 14;

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
} 
else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
} 
else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
} 
else if (hour >= 20 && hour <= 24) {
    console.log("Night");
} 
else {
    console.log("Invalid Hour");
}


// Bonus Challenge 

// Predict outputs without running:

console.log(true + true)         // Output = 2
console.log("5" - 2)             // Output = 3
console.log("5" + 2)             // Output = 52
console.log(null + 1)            // Output = 1
console.log(undefined + 1)       // Output = NaN
console.log(Boolean(" "))        // Output = true
console.log(Number(true))        // Output = 1