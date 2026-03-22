/*
TOPIC:
- what is promise
- resolve, reject
- then, catch, finally
- full execution flow
*/


/*
------------------------------------------
1. WHAT IS PROMISE?
------------------------------------------

Promise = future result

It represents a task that will complete later

States:
1. pending   → initial state
2. fulfilled → success (resolve)
3. rejected  → failure (reject)
*/



/*
------------------------------------------
2. CREATING A PROMISE
------------------------------------------
*/

let myPromise = new Promise(function (resolve, reject) {

    let success = true;

    if (success) {
        resolve("Task completed");   // success
    } else {
        reject("Task failed");       // error
    }
});



/*
------------------------------------------
3. CONSUMING PROMISE (then, catch)
------------------------------------------
*/

myPromise
    .then(function (result) {
        console.log("Success:", result);
    })
    .catch(function (error) {
        console.log("Error:", error);
    });



/*
------------------------------------------
4. SIMPLE VISUAL FLOW
------------------------------------------

Step 1:
Promise created → state = pending

Step 2:
Inside promise runs

Step 3:
resolve() OR reject()

Step 4:
.then() runs if resolved
.catch() runs if rejected
*/



/*
------------------------------------------
5. REAL EXAMPLE (ASYNC)
------------------------------------------
*/

function fetchData() {

    return new Promise(function (resolve, reject) {

        console.log("Fetching data...");

        setTimeout(function () {

            let success = true;

            if (success) {
                resolve("Data received");
            } else {
                reject("Error fetching data");
            }

        }, 2000);
    });
}


fetchData()
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });



/*
------------------------------------------
6. then() CHAINING
------------------------------------------
*/

fetchData()
    .then(function (data) {
        console.log("Step 1:", data);
        return "Processed Data";
    })
    .then(function (newData) {
        console.log("Step 2:", newData);
    });



/*
------------------------------------------
7. catch() HANDLING ERROR
------------------------------------------
*/

fetchData()
    .then(function () {
        throw new Error("Something went wrong");
    })
    .catch(function (err) {
        console.log("Caught:", err.message);
    });



/*
------------------------------------------
8. finally()
------------------------------------------

finally runs always (success or error)
*/

fetchData()
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
        console.log("Always runs");
    });



/*
------------------------------------------
9. FULL EXECUTION FLOW (VERY IMPORTANT)
------------------------------------------

Example:

console.log("Start");

fetchData();

console.log("End");


Flow:

1. "Start" → call stack
2. fetchData() → promise created
3. setTimeout → goes to Web API
4. "End" → printed

Now after 2 sec:
5. Web API → callback queue
6. event loop → moves to stack
7. resolve() → triggers .then()
*/



/*
------------------------------------------
10. PROMISE STATES FLOW
------------------------------------------

pending → resolve() → fulfilled → then()

pending → reject() → rejected → catch()
*/



/*
------------------------------------------
11. IMPORTANT RULES
------------------------------------------

- resolve() → goes to then()
- reject() → goes to catch()
- only one runs
- once settled → cannot change state
*/



/*
------------------------------------------
12. COMMON MISTAKE
------------------------------------------

Wrong:
.then(myFunc())

Correct:
.then(myFunc)

Why?
We pass function, not call it
*/



/*
------------------------------------------
13. FINAL UNDERSTANDING
------------------------------------------

Promise = object that handles async task

resolve → success
reject → error

then → handle success
catch → handle error
finally → always runs

Flow:
call stack → Web API → queue → event loop → stack
*/