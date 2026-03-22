/*
SECTION 1: BASIC SYNCHRONOUS EXECUTION
*/

console.log("1. Start of program");

/*
At this point:
- Global Execution Context (GEC) is running
- Call stack is NOT empty
*/


/*
SECTION 2: MACROTASK (setTimeout)
*/

setTimeout(() => {
    console.log("6. setTimeout callback (macrotask)");
}, 0);

/*
Explanation:
- setTimeout is handled by Web APIs (browser) or libuv (Node)
- Its callback goes to the MACROTASK QUEUE
- It will NOT run immediately
*/


/*
SECTION 3: MICROTASK (Promise.then)
*/

Promise.resolve().then(() => {
    console.log("4. Promise then (microtask)");
});

/*
Explanation:
- Promise resolves immediately
- But .then() callback goes to MICROTASK QUEUE
- Microtasks have higher priority than macrotasks
*/


/*
SECTION 4: ASYNC / AWAIT
*/

async function asyncExample() {
    console.log("2. Inside async function (before await)");

    await Promise.resolve();

    /*
    Important:
    - await pauses the function
    - remaining code goes to MICROTASK QUEUE
    */

    console.log("5. Inside async function (after await)");
}

asyncExample();
