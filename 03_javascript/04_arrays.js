/*ARRAYS IN JAVASCRIPT*/

/*
In this file we will understand:

1. What is array
2. How to access elements
3. Basic methods (push, pop, shift, unshift)
4. Searching methods
5. Important methods (map, filter, reduce)
6. Other useful methods

Arrays are used to store multiple values in one variable.
*/


/*WHAT IS ARRAY*/

/*
Array = collection of values

Syntax:
*/

let arr = [10, 20, 30, 40];

console.log(arr);


/*ACCESSING ELEMENTS*/

/*
Index starts from 0
*/

console.log(arr[0]); // 10
console.log(arr[1]); // 20

/*
Last element
*/

console.log(arr[arr.length - 1]);



/*ADDING ELEMENTS*/

/*
push → add at end
*/

arr.push(50);
console.log("After push:", arr);

/*
unshift → add at beginning
*/

arr.unshift(5);
console.log("After unshift:", arr);



/*REMOVING ELEMENTS*/

/*
pop → remove from end
*/

arr.pop();
console.log("After pop:", arr);

/*
shift → remove from beginning
*/

arr.shift();
console.log("After shift:", arr);



/*SEARCHING METHODS*/

let nums = [10, 20, 30, 40];

/*
includes → check if value exists
*/

console.log(nums.includes(20)); // true

/*
indexOf → returns index
*/

console.log(nums.indexOf(30)); // 2

/*
find → returns first match
*/

let found = nums.find(n => n > 20);
console.log("Found:", found);



/*MAP (VERY IMPORTANT)*/

/*
Creates new array
*/

let doubled = nums.map(n => n * 2);

console.log("Original:", nums);
console.log("Doubled:", doubled);



/*FILTER (VERY IMPORTANT)*/

/*
Returns elements that match condition
*/

let greater = nums.filter(n => n > 20);

console.log("Filtered:", greater);



/*REDUCE (VERY IMPORTANT)*/

/*
Used to reduce array to single value
*/

let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log("Sum:", sum);

// 2nd example
let arr1 = ["a", "b", "a", "c", "b"];

let count = arr1.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;       //acc[curr] means {a:"",b:""}
    return acc;
}, {});

console.log(count);

/*SLICE*/

/*
Returns part of array
Does NOT modify original array
*/

let sliced = nums.slice(1, 3);

console.log("Slice:", sliced);



/*SPLICE*/

/*
Adds/removes elements
Modifies original array
*/

let arr2 = [1, 2, 3, 4];

arr2.splice(1, 2,4,5); // remove 2 elements from index 1 and add 4 and 5 in it

console.log("Splice:", arr2);



/*JOIN*/

/*
Convert array to string
*/

let words = ["Hello", "World"];

console.log(words.join(" "));



/*REVERSE*/

let rev = [1, 2, 3];

let reve=rev.reverse();

console.log("Reverse:", reve);




/*SORT*/

/*
Sort array
*/

let sortArr = [5, 2, 9, 1];

sortArr.sort((a, b) => a - b);               //ascending order   

console.log("Sorted:", sortArr);


/*every*/

/*
 checking conditions on every elements of the array
*/

let Arr = [5, 2, 9, 1];

let check=Arr.every((a) => typeof "number");               //checking whether all are numbes or not 

console.log("All are numbers or not:", check);


/*REAL LIFE EXAMPLE*/

let cart = [100, 200, 300];

let total = cart.reduce((acc, price) => acc + price, 0);

console.log("Total Cart Value:", total);



/*COMMON MISTAKES*/

/*
1. Forgetting index starts from 0
2. Using map but not returning value
3. Confusing slice and splice
*/


/*----------------------------------
FINAL NOTES
----------------------------------*/

/*
push → add end
pop → remove end
shift → remove start
unshift → add start

map → transform
filter → select
reduce → combine

Golden rule:

Master map, filter, reduce → very important
*/