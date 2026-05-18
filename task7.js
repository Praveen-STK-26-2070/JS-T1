// 1. API Task - User Names Uppercase

// API:
// https://jsonplaceholder.typicode.com/users

// Fetch all users.

// Use map()
// Convert all usernames to UPPERCASE.

// Print new array.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {

    const upperCaseUsers = users.map((user) =>
      user.username.toUpperCase()
    );

    console.log(upperCaseUsers);
  })
  .catch((error) => {
    console.log("Error:", error);
  });







// 2. API Task - Expensive Products

// API:
// https://fakestoreapi.com/products

// Fetch products.

// Use filter()
// Print products price greater than 100.

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {

    const expensiveProducts = products.filter(
      (product) => product.price > 100
    );

    console.log(expensiveProducts);

  })
  .catch((error) => {
    console.log("Error:", error);
  });







// 3. Date Concept Task - Digital Clock

// Create one Date object.

// Print:
// current hours
// current minutes
// current seconds

// Output Example:
// 10 : 45 : 30

const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(hours + " : " + minutes + " : " + seconds);







// 4. String Concept Task - Username Checker

// Create one string:
// "   Naveen Kumar   "

// Remove spaces using trim().

// Convert into uppercase.

// Check string includes "KUMAR".

// Print final output.

let username = "   Naveen Kumar   ";

let trimmedName = username.trim();

let upperName = trimmedName.toUpperCase();

let check = upperName.includes("KUMAR");

console.log(upperName);
console.log(check);







// 5. Array Concept Task - Student Rank System

// Create one array:
// [450, 300, 700, 200, 900]

// Sort marks high to low.

// Print top 3 marks only using slice().

let marks = [450, 300, 700, 200, 900];

marks.sort((a, b) => b - a);

let topMarks = marks.slice(0, 3);

console.log(topMarks);