// Looping Statements


// 1. Print Numbers
// Print numbers from 1 to 20 using a for loop.

for (let a = 1; a <= 20; a++) {
    console.log(a);
}


// 2. Odd Numbers
// Print all odd numbers from 1 to 50.

for (let b = 1; b <= 50; b++) {
    if (b % 2 == 1) {
        console.log(b);
    }
}


// 3. Multiplication Table
// Print the multiplication table of 7.
// Example:
// 7 x 1 = 7
// 7 x 2 = 14

for (let c = 1; c <= 10; c++){
    console.log(`7 x ${c} = ${7 * c}`);
}


// 4. Reverse Counting
// Using while loop, print numbers from 20 to 1.

let d = 20;
while (d >= 1) {
    console.log(d);
    d--;
}


// 5. Sum of Numbers
// Find the total sum of numbers from 1 to 100.

let sum = 0;
for (let e = 1; e <= 100; e++) {
    sum += e;
}
console.log("Total Sum =", sum);


// 6. Array Loop
// Loop through this array and print all values.
// let fruits = ["apple","banana","orange","grapes"]

let fruits = ["apple","banana","orange","grapes"];
for (let f of fruits) {
    console.log(f);
}


// 7. Count Even Numbers
// Count how many even numbers are present between 1 to 50.

let count = 0;
for (let g = 1; g <= 50; g++) {
    if (g % 2 == 0) {
        count++;
    }
}
console.log("Total Even Numbers =", count);


// 8. Star Pattern
// Print this pattern using loops:
// *
// **
// ***
// ****
// *****

for (let h = 1; h <= 5; h++) {
    console.log("*".repeat(h));
}


// Functions

// 9. Simple Function
// Create a function named welcome() that prints:
// Welcome to JavaScript

function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();


// 10. Function with Parameter
// Create a function that accepts a name and prints:
// Hello Naveen

function greet(name) {
    console.log("Hello " + name);
}
greet("Naveen");


// 11. Add Two Numbers
// Create a function that takes 2 numbers and returns the addition.
// Example:
// add(10,20)
// Output:
// 30

function add(a,b) {
    return a + b;
}
console.log(add(10,20));


// 12. Salary Bonus
// Create a function that adds bonus to employee salary.
// Example:
// salary = 50000
// bonus = 5000
// Output:
// 55000

function add(bonus) {
    let salary = 50000;
    console.log(salary + bonus);
}
add(5000);


// 13. Object Loop
// Print all keys and values using for in.
// let student = {
//     name : "Rahul",
//     course : "JavaScript",
//     marks : 95
// }

let student = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
};
for (let j in student) {
    console.log(j + " : " + student[j]);
}


// 14. Find Largest Number
// Create a function to find the largest number between two values.
// Example:
// largest(10,50)
// Output:
// 50

function largest(a,b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(largest(10,50));


// 15. Mini Employee Task
// Create an employee object and print:
// Employee Name
// Department
// Salary
// Salary after bonus
// Using:
// object
// function
// parameter
// console.log()

let employee = {
    name: "Praveen",
    department: "IT",
    salary: 40000
};

function salaryAfterBonus(salary, bonus) {
    return salary + bonus;
}

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);
console.log("Salary after bonus:", salaryAfterBonus(employee.salary, 5000));