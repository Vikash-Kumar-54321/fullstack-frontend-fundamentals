/*JAVASCRIPT BASICS*/

/*
In this file we will understand:

1. Variables
2. Values (Data Types)
3. Operators

Run code using js runtime environment.
*/


/*VARIABLES*/

/*
Variable = container to store data

Syntax:

let variableName = value;

3 ways to declare variables:

var (old, avoid in modern JS)
let (used when value can change)
const (used when value should NOT change)
*/


let name = "Vikash";   // can change later
const age = 20;       // cannot change
var city = "Delhi";   // old method


console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);


/*
Difference between let and const:

let → value can change
const → value cannot change

Example:
*/

let score = 10;
score = 20;  // allowed

// const pi = 3.14;
// pi = 3.15; ❌ error (not allowed)



/*VALUES (DATA TYPES)*/

/*
Value = data stored inside variable

Common types:
*/

// 1. Number
let num = 100;

// 2. String (text)
let str = "Hello";

// 3. Boolean (true/false)
let isLoggedIn = true;

// 4. Undefined (no value assigned)
let x;

// 5. Null (intentionally empty)
let y = null;


console.log(num, typeof num);
console.log(str, typeof str);
console.log(isLoggedIn, typeof isLoggedIn);
console.log(x, typeof x);
console.log(y, typeof y);


/*
Important difference:

undefined → value not assigned
null → value intentionally empty
*/



/*OPERATORS*/

/*
Operators are used to perform operations on values
*/


/*ARITHMETIC OPERATORS*/

/*
Used for calculations
*/

let a = 10;
let b = 5;

console.log(a + b); // addition → 15
console.log(a - b); // subtraction → 5
console.log(a * b); // multiplication → 50
console.log(a / b); // division → 2
console.log(a % b); // modulus → 0 (remainder)


/*ASSIGNMENT OPERATORS*/

/*
Used to assign values
*/

let c = 10;

c += 5;  // c = c + 5 → 15
c -= 3;  // c = c - 3 → 12

console.log("c value:", c);



/*COMPARISON OPERATORS*/

/*
Used to compare values
Return true or false
*/

let d = 10;
let e = "10";

console.log(d == e);   // true (only value check)
console.log(d === e);  // false (value + type check)

console.log(d != e);   // false
console.log(d !== e);  // true

console.log(d > 5);    // true
console.log(d < 5);    // false



/*
IMPORTANT:

==  → checks only value
=== → checks value + type (use this in real projects)
*/



/*LOGICAL OPERATORS*/

/*
Used to combine conditions
*/

let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // AND → both must be true
console.log(isAdult || hasID); // OR → one must be true
console.log(!isAdult);         // NOT → reverse



/*REAL LIFE EXAMPLE*/

let userAge = 18;
let hasLicense = true;

let canDrive = userAge >= 18 && hasLicense;

console.log("Can drive:", canDrive);


/*
Explanation:

userAge >= 18 → true
hasLicense → true

true && true → true
*/
