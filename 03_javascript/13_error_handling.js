/*
TOPIC: Error Handling in JavaScript (try, catch, finally)

------------------------------------------
WHAT IS ERROR?
------------------------------------------

Error = something went wrong in code

Examples:
- undefined variable
- wrong syntax
- invalid operation

If not handled → program may crash
*/



/*
------------------------------------------
1. Basic try...catch
------------------------------------------

try → code that may throw error
catch → handles error
*/

try {
    let a = 10;
    let b = 0;

    console.log(a / b); // no error here (Infinity)
} catch (error) {
    console.log("Error occurred:", error.message);
}



/*
------------------------------------------
2. Real error example
------------------------------------------
*/

try {
    console.log(x); // x is not defined → error
} catch (error) {
    console.log("Error caught:", error.message);
}



/*
------------------------------------------
3. finally block
------------------------------------------

finally always runs
*/

try {
    console.log("Inside try");
} catch (error) {
    console.log("Inside catch");
} finally {
    console.log("Always runs");
}



/*
------------------------------------------
4. throw (custom error)
------------------------------------------

we can create our own error
*/

function checkAge(age) {
    if (age < 18) {
        throw new Error("Not allowed");
    }
    console.log("Access granted");
}

try {
    checkAge(15);
} catch (error) {
    console.log("Custom error:");
    console.log("Custom error:", error.message);
}




/*
------------------------------------------
5. try...catch with return
------------------------------------------
*/

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

console.log(divide(10, 0));



/*
------------------------------------------
7. finally with return (important)
------------------------------------------
*/

function test() {
    try {
        return "from try";
    } finally {
        console.log("finally runs even after return");
    }
}

console.log(test());



/*
------------------------------------------
8. Important notes
------------------------------------------

- try handles runtime errors only
- syntax errors are not caught

Example:
try {
    // let a = ; ❌ syntax error (won't be caught)
} catch(e) {}
*/



/*
------------------------------------------
9. Without error object
------------------------------------------
*/

try {
    console.log(y);
} catch {
    console.log("Error caught without variable");
}



/*
------------------------------------------
10. Nested try...catch
------------------------------------------
*/

try {
    try {
        console.log(z);
    } catch (innerError) {
        console.log("Inner catch");
    }
} catch (outerError) {
    console.log("Outer catch");
}



/*
------------------------------------------
FINAL UNDERSTANDING
------------------------------------------

try → risky code
catch → handle error
finally → always runs
throw → create custom error

Used in:
- API handling
- validation
- async code (later)
*/