// Task 1 — Basic Function
// Create a function called welcomeUser.
// Requirements:
// Accept name
// Print:
// Welcome Naveen
// Example:
// welcomeUser("Naveen")

function welcomeUser(name) {
    console.log("Welcome " + name);
}
welcomeUser("Praveen");


// Task 2 — Parameter + Return
// Create a function squareNumber.
// Requirements:
// Accept one number
// Return square value
// Example:
// squareNumber(5)
// Output:
// 25

function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5));


// Task 3 — Object Function
// Create an object:
// {
//    name : "Rahul",
//    salary : 50000
// }
// Requirements:
// Create a function:
// employeeBonus(bonus)
// Output:
// Rahul
// 55000

let employee = {
    name : "Rahul",
    salary : 50000
}
function employeeBonus(bonus) {
    console.log(employee.name);
    console.log(employee.salary + bonus);
}
employeeBonus(5000);


// Task 4 — Scope Checking
// Inside a function:
// Create var
// Create let
// Create const
// Requirements:
// Try accessing them outside block
// Observe which works and which gives error

function checkScope() {

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
        console.log(a); // Works
        console.log(b); // Works
        console.log(c); // Works
    }
    console.log(a); // Works
    console.log(b); // Error
    console.log(c); // Error
}
checkScope();


// Task 5 — Arrow Function
// Convert this into arrow function:
// function add(a,b){
//    console.log(a+b);
// }

let add = (a,b) => {
    console.log(a + b);
}
add(5,10);


// Task 6 — Callback Function
// Create:
// multiply
// calculator
// Requirements:
// calculator should accept:
// callback function
// two numbers
// Example:
// calculator(multiply,5,2)
// Output:
// 10

function multiply(a,b) {
    return a * b;
}
function calculator(callback, num1, num2) {
    console.log(callback(num1, num2));
}
calculator(multiply, 5, 2);


// Task 7 — Generator Function
// Create generator function offers.
// Requirements:
// Yield:
// "50% OFF"
// "Free Delivery"
// "Cashback"
// Use:
// next()
// to print values one by one.

function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}
let offer = offers();
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// for (let h of offer) {
//     console.log(h);
// }


// Task 8 — Default Parameter
// Create:
// student(name,course="JavaScript")
// Requirements:
// If course not passed,
// default should become "JavaScript".

let student = function(name, course = "JavaScript") {
    console.log("Name:", name);
    console.log("Course:", course);
}
student("Praveen");


// Task 9 — Currying
// Create currying function for multiplication.
// Example:
// multi(2)(3)(4)
// Output:
// 24

function multi (a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
console.log(multi(2)(3)(4));


// Task 10 — Spread Operator
// Merge these arrays:
// [1,2,3]
// [4,5,6]
// Final Output:
// [1,2,3,4,5,6]

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = [...arr1, ...arr2];
console.log(result);


// Task 11 — Object Spread
// Merge two objects:
// {name:"Navi"}
// {role:"Developer"}
// Final Output:
// {
//   name:"Navi",
//   role:"Developer"
// }

let obj1 = {name: "Navi"};
let obj2 = {role: "Developer"};
let result1 = {...obj1, ...obj2};
console.log(result1);


// Task 12 — Rest Operator
// Create function:
// numbers(...num)
// Requirements:
// Print all numbers
// Print total sum
// Example:
// numbers(1,2,3,4)
// Output:
// [1,2,3,4]
// 10

function numbers(...num) {
    console.log(num);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log(sum);
}
numbers(1, 2, 3, 4);


// Mini Challenge
// Create one small Student Management System using:
// function
// callback
// object
// array
// spread operator
// rest operator
// Features:
// Add student
// Print students
// Calculate marks
// Add bonus marks

let students = [];

function addStudent(name, marks) {

    let student = {
        name,
        marks
    };

    students.push(student);
}

function calculateMarks(student, callback) {
    let total = 0;
    student.marks.forEach((mark) => {
        total += mark;
    });
    return callback(total);
}

function bonusMarks(total) {
    return total + 5;
}

function printStudents() {

    let allStudents = [...students];

    allStudents.forEach((student) => {

        let finalTotal = calculateMarks(student, bonusMarks);

        console.log("Name:", student.name);
        console.log("Marks:", student.marks);

        let total = student.marks.reduce((sum, mark) => sum + mark, 0);

        console.log("Total:", total);
        
        console.log("Final Total:", finalTotal);

        console.log("----------------");

    });
}

addStudent("Rahul", [80,50,60]);
addStudent("Navi", [75,80,90]);
addStudent("Praveen", [90,85,95]);

printStudents();