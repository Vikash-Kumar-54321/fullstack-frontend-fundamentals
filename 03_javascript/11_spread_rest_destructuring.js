/*
TOPIC: Spread, Rest, and Destructuring in JavaScript

These three look similar (...) but behave differently depending on usage
*/



/*
------------------------------------------
1. SPREAD OPERATOR (...)
------------------------------------------

Spread = "expand / spread out values"
Used to unpack array or object
*/


// array example
let arr1 = [1, 2, 3];

// spread → copies values
let arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]


// merging arrays
let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];

console.log(merged); // [1,2,3,4]


// object example
let obj1 = { name: "Vikash", age: 20 };

let obj2 = { ...obj1 };

console.log(obj2);


// merging objects
let user = { name: "Vikash" };
let details = { age: 21 };

let finalUser = { ...user, ...details };

console.log(finalUser);



/*
------------------------------------------
2. REST OPERATOR (...)
------------------------------------------

Rest = "collect multiple values into one"
Used in function parameters
*/


function sumAll(...numbers) {
    // numbers becomes array
    let sum = 0;

    sum=numbers.reduce((a,b)=>a+b)

    return sum;
}

console.log(sumAll(1, 2, 3));       // 6
console.log(sumAll(10, 20, 30, 40)); // 100



/*
Rest with normal parameters
*/

function printData(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
}

printData(1, 2, 3, 4, 5);
printData(1,2)


/*
------------------------------------------
3. DESTRUCTURING (ARRAY)
------------------------------------------

Extract values from array easily
*/

let nums = [10, 20, 30];

// normal way
let x = nums[0];

// destructuring
let [a1, b1, c1] = nums;

console.log(a1, b1, c1);


// skipping values
let [first, , third] = nums;

console.log(first, third);


// default value
let [p = 100, q = 200] = [5];

console.log(p, q);



/*
------------------------------------------
4. DESTRUCTURING (OBJECT)
------------------------------------------

Extract values from object
*/

let person = {
    name: "Vikash",
    age: 21
};

// normal way
let name1 = person.name;

// destructuring
let { name, age } = person;

console.log(name, age);


// rename variable
let { name: userName } = person;

console.log(userName);


// default value
let { city = "Patna" } = person;

console.log(city);



/*
------------------------------------------
5. COMBINATION (SPREAD + DESTRUCTURING)
------------------------------------------
*/

let numbers = [1, 2, 3, 4, 5];

let [firstNum, ...restNums] = numbers;

console.log(firstNum);  // 1
console.log(restNums);  // [2,3,4,5]



/*
------------------------------------------
6. IMPORTANT DIFFERENCE
------------------------------------------

SPREAD:
- expands values
- used while copying or merging

Example:
[...arr]



REST:
- collects values
- used in function parameters

Example:
function(...args)



DESTRUCTURING:
- extracts values
- used to get values from array/object

Example:
let [a, b] = arr
let {name} = obj
*/



/*
------------------------------------------
7. COMMON CONFUSION (VERY IMPORTANT)
------------------------------------------

Spread vs Rest look same (...)

But difference depends on position:

LEFT SIDE → Rest (collect)
RIGHT SIDE → Spread (expand)
*/


// rest (left side)
let [a2, ...rest2] = [1, 2, 3, 4];


// spread (right side)
let newArr = [...rest2];



/*
------------------------------------------
8. PRACTICAL EXAMPLE
------------------------------------------
*/

function createUser(name, ...skills) {
    return {
        name,
        skills
    };
}

let userData = createUser("Vikash", "JS", "Node", "MongoDB");

console.log(userData);



/*
------------------------------------------
FINAL UNDERSTANDING
------------------------------------------

- spread → break values
- rest → collect values
- destructuring → pick values

This topic is heavily used in:
- React
- Node.js APIs
- modern JavaScript
*/