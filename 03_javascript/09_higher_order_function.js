/*
TOPIC: Higher Order Functions + Callbacks + setTimeout + setInterval

------------------------------------------
What is a Higher Order Function?
------------------------------------------

A function that:
1. takes another function as input
OR
2. returns a function

Simple:
function inside function = higher order function
*/



/*
------------------------------------------
1. Function as a value
------------------------------------------
*/

function greet() {
    console.log("Hello");
}

// storing function in variable
let sayHi = greet;

sayHi(); // Hello



/*
------------------------------------------
2. Passing function as argument (callback)
------------------------------------------
*/

function processUser(name, callback) {
    console.log("Processing user:", name);

    // calling callback
    callback();
}

function done() {
    console.log("Done processing");
}

processUser("Vikash", done);


/*
callback = function passed into another function
*/



/*
------------------------------------------
3. Anonymous callback
------------------------------------------
*/

processUser("Rahul", function () {
    console.log("Anonymous callback executed");
});



/*
------------------------------------------
4. Arrow function callback
------------------------------------------
*/

processUser("Amit", () => {
    console.log("Arrow callback");
});



/*
------------------------------------------
5. Function returning function
------------------------------------------
*/

function outer() {
    function inner() {
        let inside=()=>{
            console.log("Inner function returned");
        } 
        return inside
    };
    return inner
}

let fun=outer()()()



/*
------------------------------------------
6. Real example of Higher Order Function
------------------------------------------
*/

function calculator(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculator(2, 3, add));
console.log(calculator(2, 3, multiply));



/*
------------------------------------------
7. setTimeout (runs once after delay)
------------------------------------------

syntax:
setTimeout(function, time_in_ms)
*/

setTimeout(function () {
    console.log("Runs after 2 seconds");
}, 2000);



/*
------------------------------------------
8. setInterval (runs again and again)
------------------------------------------

syntax:
setInterval(function, time_in_ms)
*/

let count = 0;

let intervalId = setInterval(function () {
    count++;
    console.log("Running:", count);

    // stopping after 5 times
    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);



/*
------------------------------------------
9. clearTimeout (stop timeout)
------------------------------------------
*/

let timeoutId = setTimeout(function () {
    console.log("This will not run");
}, 3000);

clearTimeout(timeoutId);



/*
------------------------------------------
10. Important interview points
------------------------------------------

- callback = function passed as argument
- higher order function = takes/returns function
- setTimeout → runs once
- setInterval → runs repeatedly
- clearInterval → stops interval
- clearTimeout → stops timeout

------------------------------------------
Common mistakes
------------------------------------------

Wrong:
setTimeout(myFunc(), 1000); // runs immediately

Correct:
setTimeout(myFunc, 1000); // pass reference
*/



/*
------------------------------------------
11. Small practice example
------------------------------------------
*/

function repeatTask(task, times) {
    for (let i = 0; i < times; i++) {
        task();
    }
}

repeatTask(function () {
    console.log("Task running");
}, 3);



/*
------------------------------------------
Final understanding
------------------------------------------

Functions in JS are first-class citizens:
- can be stored
- can be passed
- can be returned

This is the base of:
- callbacks
- async programming
- promises (next topic)
*/