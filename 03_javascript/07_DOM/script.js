/*
DOM Practice File
Connected with index.html

DOM = Document Object Model
JS uses DOM to access and change HTML
*/


/*
------------------------------------------
1. Selecting elements
------------------------------------------
*/

// by id
let title = document.getElementById("title");

// by class (returns HTMLCollection)
let items = document.getElementsByClassName("item");

// by id
let button = document.getElementById("btn");
let input = document.getElementById("inputBox");
let link = document.getElementById("link");


/*
------------------------------------------
2. Changing text/content
------------------------------------------
*/

// innerText → only text
title.innerText = "DOM Learning Started";

// innerHTML → allows HTML tags
// title.innerHTML = "<span>New Title</span>";



/*
------------------------------------------
3. Changing style
------------------------------------------
*/

title.style.color = "blue";
title.style.fontSize = "30px";



/*
------------------------------------------
4. Loop through elements
------------------------------------------
*/

for (let item of items) {
    console.log(item.innerText);
}



/*
------------------------------------------
5. Working with attributes
------------------------------------------
*/

// get attribute
console.log(link.getAttribute("href"));

// set attribute
link.setAttribute("href", "https://google.com");


/*
------------------------------------------
6. Creating and adding elements
------------------------------------------
*/

// create element
let newDiv = document.createElement("div");

// add text
newDiv.innerText = "I am dynamically added";

// add to page
document.body.appendChild(newDiv);



/*
------------------------------------------
7. Removing elements
------------------------------------------
*/

setTimeout(() => {
    newDiv.remove();
}, 5000);



/*
------------------------------------------
8. Event Handling
------------------------------------------
*/

// using addEventListener (BEST PRACTICE)

button.addEventListener("click", function () {
    console.log("Button clicked");
    title.innerText = "Button was clicked";
});


/*
------------------------------------------
IMPORTANT DIFFERENCE
------------------------------------------

1. Using HTML (onclick)

<button onclick="handleClick()"></button>

function handleClick() {
    console.log("clicked");
}

Here:
- function is CALLED from HTML
- tightly coupled (not good practice)


2. Using JS (addEventListener)

button.addEventListener("click", handleClick);

function handleClick() {
    console.log("clicked");
}

Here:
- we only pass function reference (no ())
- JS handles calling it
- better separation of code (used in real projects)


Wrong:
button.addEventListener("click", handleClick());

This will run immediately, not on click
*/



/*
9. Input event
*/

input.addEventListener("input", function () {
    console.log("User typing:", input.value);
});



/*
10. querySelector (modern way)
*/

// first matching element
let firstItem = document.querySelector("li");
console.log(firstItem.innerText);

// all matching elements (NodeList)
let allItems = document.querySelectorAll("li");

allItems.forEach(function (item) {
    console.log(item.innerText);
});



