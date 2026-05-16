// 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array

let presentStudents = ["Praveen", "Suriya", "Kowshalya"];

let absentStudents = ["Vennila", "Sanjay"];

let allStudents = [...presentStudents, ...absentStudents];

allStudents.push("Meenu");

console.log(allStudents);



// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object

let mobile = {
  brand: "Samsung",
  price: 25000
};

let charger = {
  type: "Fast Charger (Type-C)",
  warranty: "6 Months"
};

let productDetails = {
  ...mobile,
  ...charger,
  deliveryDate: "16-05-2026"
};

console.log(productDetails);



// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item

function orderFood(...items) {

  console.log("Total items ordered:", items.length);

  console.log("First item:", items[0]);

  console.log("Last item:", items[items.length - 1]);
}

orderFood("Pizza", "Burger", "Pasta", "Juice");



// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees

let employees = [
  { name: "Praveen", salary: 45000 },
  { name: "Suriya", salary: 60000 },
  { name: "Kowshalya", salary: 75000 },
  { name: "Meenu", salary: 40000 }
];

let highSalaryEmployees = employees.filter(emp => emp.salary > 50000);

console.log(highSalaryEmployees);



// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total

let scores = [120, 150, 200, 180, 100];

let totalScore = scores.reduce((total, score) => {
  return total + score;
}, 0);

console.log("Total Score:", totalScore);