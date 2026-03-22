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


/*
SECTION 5: END OF SYNCHRONOUS CODE
*/

console.log("3. End of program");

/*
Now important moment:

All synchronous code is done.
There is NOTHING executing now.

So:
Call Stack = EMPTY

This is when EVENT LOOP starts working.
*/


/*
SECTION 6: MULTIPLE .then() CHAIN
*/

Promise.resolve()
    .then(() => {
        console.log("7. Then 1");
    })
    .then(() => {
        console.log("8. Then 2");
    })
    .then(() => {
        console.log("9. Then 3");
    });

/*
Important concept:
- Only first .then goes to microtask queue initially
- Next .then is added AFTER previous one finishes
- So execution is sequential
*/


/*
FINAL EXECUTION ORDER EXPLANATION

Synchronous phase:
1. Start of program
2. Inside async function (before await)
3. End of program

Now stack becomes EMPTY

Event loop starts:

Step 1: Run ALL microtasks
4. Promise then
5. async function (after await)
7. Then 1
8. Then 2
9. Then 3

Step 2: Run macrotask
6. setTimeout callback

FINAL OUTPUT ORDER:

1. Start of program
2. Inside async function (before await)
3. End of program
4. Promise then
5. Inside async function (after await)
7. Then 1
8. Then 2
9. Then 3
6. setTimeout callback
*/