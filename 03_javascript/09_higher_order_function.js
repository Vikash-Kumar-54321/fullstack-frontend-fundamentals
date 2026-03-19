/*
02_higherOrderFunctions.js

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


