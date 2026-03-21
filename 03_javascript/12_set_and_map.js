/*
05_set_map.js

TOPIC: Set and Map in JavaScript (Deep Dive)

------------------------------------------
WHAT IS SET?
------------------------------------------

Set = collection of UNIQUE values

- no duplicates allowed
- values can be anything
*/


/*
------------------------------------------
1. Creating Set
------------------------------------------
*/

// empty set
let s1 = new Set();

// with values (must be iterable)
let s2 = new Set([1, 2, 3, 3, 4]);

console.log(s2); // {1,2,3,4}



/*
------------------------------------------
IMPORTANT: Constructor takes ITERABLE
------------------------------------------

new Set(iterable)

Iterable = anything we can loop over
Examples:
- array
- string
- map
*/

let s3 = new Set("hello");

console.log(s3); // {'h','e','l','o'}



/*
------------------------------------------
WHAT IS ITERABLE?
------------------------------------------

Iterable = something you can use in loop

Example:
for (let val of something) { }

If it works → iterable

Examples:
✔ array
✔ string
✔ set
✔ map

Not iterable:
❌ object
*/


// example
let arr = [1, 2, 3];

for (let val of arr) {
    console.log(val);
}



/*
------------------------------------------
2. Adding values to Set
------------------------------------------

add() is used to insert single value
*/

let s = new Set();

s.add(10);
s.add(20);
s.add(20); // ignored (duplicate)

console.log(s);



/*
------------------------------------------
3. Checking values
------------------------------------------
*/

console.log(s.has(10)); // true



/*
------------------------------------------
4. Deleting values
------------------------------------------
*/

s.delete(10);

console.log(s);



/*
------------------------------------------
5. Size
------------------------------------------
*/

console.log(s.size);



/*
------------------------------------------
6. Looping Set
------------------------------------------
*/

for (let val of s) {
    console.log(val);
}



/*
------------------------------------------
7. Convert Set to Array
------------------------------------------
*/

let newArr = [...s];

console.log(newArr);



/*
------------------------------------------
8. Remove duplicates from array
------------------------------------------
*/

let nums = [1, 2, 2, 3, 4, 4];

let unique = [...new Set(nums)];

console.log(unique);

