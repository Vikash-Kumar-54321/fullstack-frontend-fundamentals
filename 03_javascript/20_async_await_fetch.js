/*
TOPIC:
- async / await
- fetch (with .then and async/await)
- internal working (browser + promise)
- resolve / reject flow
*/



/*
------------------------------------------
1. WHAT IS ASYNC / AWAIT?
------------------------------------------

async → makes function return a promise

await → waits for promise to resolve

It is just cleaner way of writing .then()
*/


/*
Example using Promise
*/

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}


// using then
getData().then((data) => {
    console.log("Using then:", data);
});


// using async/await
async function fetchData() {
    let data = await getData();
    console.log("Using await:", data);
}

fetchData();



/*
------------------------------------------
2. WHAT IS FETCH?
------------------------------------------

fetch = function to get data from server (API)

It returns a promise
*/


/*
------------------------------------------
3. FETCH USING .then()
------------------------------------------
*/

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        // response is not actual data yet
        return response.json(); // convert to JSON
    })
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

/*
------------------------------------------
4. FETCH USING async/await
------------------------------------------
*/

async function getPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        let data = await response.json();

        console.log("Data using await:", data);

    } catch (error) {
        console.log("Error:", error);
    }
}

getPost();



/*
------------------------------------------
5. IMPORTANT: FETCH HAS 2 STEPS
------------------------------------------

Step 1:
fetch() → returns response (headers + status)

Step 2:
response.json() → actual data
*/




/*
------------------------------------------
6. INTERNAL FLOW (VERY IMPORTANT)
------------------------------------------

When we call fetch():

1. fetch() goes to Web API (browser / Node)
2. request is sent to server
3. response comes back

Now two cases:

CASE 1: network success
→ promise is RESOLVED (fulfilled)

CASE 2: network failure
→ promise is REJECTED
*/



/*
------------------------------------------
7. VERY IMPORTANT CONFUSION
------------------------------------------

Even if API gives 404 or 500

fetch STILL resolves (not reject)

WHY?

Because:
Network worked
Only server response is error

So we must check:
response.ok
*/


async function checkResponse() {
    let response = await fetch("https://jsonplaceholder.typicode.com/invalid");

    if (!response.ok) {
        console.log("Server error:", response.status);
        return;
    }

    let data = await response.json();
    console.log(data);
}

checkResponse();



/*
------------------------------------------
8. FLOW VISUALIZATION
------------------------------------------

console.log("Start");

fetch(url)
   → goes to Web API

console.log("End");

After response:
→ promise resolved
→ .then() / await runs


So output:
Start
End
Data comes later
*/



/*
------------------------------------------
9. PROMISE FLOW INSIDE FETCH
------------------------------------------

fetch() returns promise

Internally:

pending
   ↓
network response received
   ↓
fulfilled → .then()
OR
rejected → .catch()
*/



/*
------------------------------------------
10. FULL FLOW STEP BY STEP
------------------------------------------

1. call fetch()
2. goes to Web API
3. request sent to server
4. response comes back
5. promise resolved
6. event loop pushes to stack
7. .then() or await executes
*/



/*
------------------------------------------
11. FINAL UNDERSTANDING
------------------------------------------

async/await:
- cleaner syntax of promise

fetch:
- used to call API
- returns promise

IMPORTANT:
- fetch has 2 steps (response → json)
- fetch resolves even for 404
- only network error goes to catch

FLOW:
call stack → Web API → response → queue → event loop → stack
*/
