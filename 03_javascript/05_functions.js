/*

Function = a block of code that we can reuse

Why use functions?
- avoids repeating code
- makes code easier to read
- very important in backend development

1. FUNCTION DECLARATION
*/

function greet() {
    console.log("Hello bro");
}

// calling the function
greet();

/*
Important:
- uses 'function' keyword
- hoisted (can be called before declaration)
*/

sayHello(); // works

function sayHello() {
    console.log("I am hoisted");
}



/*
2. PARAMETERS & ARGUMENTS

Parameters = variables inside function
Arguments = actual values passed
*/

function add(a, b) {
    console.log(a + b);
}

add(2, 3);



/*
Different types of parameters
*/

// 1. single parameter
function square(x) {
    console.log(x * x);
}
square(5);


// 2. multiple parameters
function multiply(a, b, c) {
    console.log(a * b * c);
}
multiply(2, 3, 4);


// 3. default parameter
function greetUser(name = "Guest") {
    console.log("Hello " + name);
}

greetUser("Vikash");
greetUser(); // default used

// example2
function greetUser(name = "Guest",name2) {
    console.log("Hello " + name +"and "+ name2);
}

greetUser("Vikash");   //error because first name will be given Vikash but the second one has not default value
greetUser(); // default used


// 4. unlimited parameters (...rest)

function sumAll(...numbers) {
    // numbers is an array
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    console.log("Sum:", sum);
}

sumAll(1, 2, 3);
sumAll(5, 10, 15, 20);

// method 2
/*Use arguments in body directly it keeps store all the arguments by default and can be use inside bosy of function */
function sumAll() {
    // numbers is an array
    let sum = 0;

    for (let num of arguments) {
        sum += num;
    }

    console.log("Sum:", sum);
}

sumAll(1, 2, 3);
sumAll(5, 10, 15, 20);

// 5. passing array as parameter
function printArray(arr) {
    console.log("Array:", arr);
}

printArray([1, 2, 3, 4]);



/*
3. RETURN KEYWORD

return sends value back
after return, function stops
*/

function subtract(a, b) {
    return a - b;
}

let result = subtract(10, 4);
console.log("Result:", result);


/*
if no return → undefined
*/

function test() {
    console.log("No return here");
}

let val = test();
console.log(val); // undefined



/*
4. FUNCTION EXPRESSION

function stored in variable
not hoisted
*/

const sayBye = function () {
    console.log("Bye bro");
};

sayBye();

// calling before definition will give error



/*
5. ANONYMOUS FUNCTION

function without name
used inside variables or callbacks
*/

const demo = function () {
    console.log("I am anonymous function");
};

demo();



/*
6. ARROW FUNCTIONS

short syntax of function
*/

const addArrow = (a, b) => {
    return a + b;
};

console.log(addArrow(3, 7));


// shortcut return
const multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(4, 5));


// single parameter
const squareArrow = x => x * x;

console.log(squareArrow(6));


// no parameter
const hello = () => console.log("Hello from arrow function");

hello();



/*
7. IIFE (Immediately Invoked Function)

runs immediately after creation
*/

(function () {
    console.log("IIFE executed");
})();


(function (name) {
    console.log("Hello " + name);
})("Vikash");


(() => {
    console.log("Arrow IIFE");
})();

