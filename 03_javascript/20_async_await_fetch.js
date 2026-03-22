/*
13_async_fetch.js

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



