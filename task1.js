// Section 1: Variables (1–8)

// 1. What is the Output?
var a = 10;
a = 15;
console.log(a); //The Output is 15.

// 2. What happens here?
let b = 20;
let b = 30; 
// Variables declared with 'let' cannot be redeclared. Output "SyntaxError: Identifier 'b' has already been declared."

// 3. What is the Output?
const c = 50;
console.log(c); //The Output is 50.

// 4. Identify error:
const x = 10;
x = 20;
// const variable cannot be reassigned. Output "TypeError: Assignment to constant variable."

// 5. Output?
var p = 5;
var p = 10;
console.log(p); //The Output is 10.

// 6. Output?
let q = 25;
q = q + 10;
console.log(q); //The Output is 35.

// 7. Output?
const r = 7;
console.log(r + 3); //The Output is 10.

// 8. Fill correct keyword:
// ___ a = 10;
// It can be let, var or const.


// Section 2: Console Methods (9–12)

// 9. Which method prints normal output?
console.log();

// 10. Which method shows warning?
console.warn();

// 11. Which method shows error?
console.error();

// 12. What does this do?
console.clear();
// It will clear the console.


// Section 3: Data Types (13–18)

// 13. Output?
let a = "hello";
console.log(typeof a); //The Output is string.

// 14. Output?
let b = 100;
console.log(typeof b); //The Output is number.

// 15. Output?
let c = false;
console.log(typeof c); //The Output is boolean.

// 16. Output?
let d;
console.log(d); //The Output is undefined.

// 17. What is type of null?
// null is considered as a primitive data type that represents an empty value.

// 18. Convert string to number:
// "25"
let a = Number("25");
console.log(a);


// Section 4: Arrays (19–24)

// 19. Create array of 3 fruits.
let arr = ["apple","banana", "grapes"];

// 20. Output?
let arr = ["a","b","c"];
console.log(arr[1]); //The Output is b.

// 21. Output?
let arr = ["x","y","z"];
console.log(arr[arr.length-1]); //The Output is z.

// 22. How to get first element?
console.log(arr[0]);

// 23. Output?
let arr = ["apple","banana"];
console.log(arr.length); //The Output is 2.

// 24. Add new element to array.
arr.push();
console.log(arr);


// Section 5: Objects (25–28)

// 25. Create object with name & age.
let obj = {
    name:"Praveen",
    age: 25
};
console.log(obj);

// 26. Output?
let obj = {name:"Naveen"};
console.log(obj.name); //The Output is Naveen.

// 27. Output?
let obj = {
  fruits: ["apple","banana"]
};
console.log(obj.fruits[1]); //The Output is banana.

// 28. How to access last element inside object array?
console.log(arr[arr.length-1]);


// Section 6: Arithmetic Operators (29–32)

// 29. Output?
console.log(5 + 3); //The Output is 8.

// 30. Output?
console.log(10 % 3); //The Output is 1.

// 31. Output?
console.log(2 ** 3); //The Output is 8.

// 32. Output?
console.log(10 / 2); //The Output is 5.


// Section 7: Increment / Decrement (33–36)

// 33. Output?
let a = 5;
a++;
console.log(a); //The Output is 6.

// 34. Output?
let b = 5;
let c = b++;
console.log(b, c); //The Output is 6 5.

// 35. Output?
let x = 5;
let y = ++x;
console.log(x, y); //The Output is 6 6.

// 36. Output?
let m = 3;
let n = m--;
console.log(m, n); //The Output is 2 3.


// Section 8: Comparison & Logical (37–39)

// 37. Output?
console.log(5 == "5"); //The Output is true.

// 38. Output?
console.log(5 === "5"); //The Output is false.

// 39. Output?
console.log(true && false || true); //The Output is true.


// Section 9: Ternary (40)

// 40. Output?
5 > 3 ? console.log("Yes") : console.log("No"); 
//The Output is Yes.