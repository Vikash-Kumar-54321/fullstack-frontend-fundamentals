/*LOOPS IN JAVASCRIPT*/

/*
In this file we will understand:

1. for loop
2. while loop
3. do-while loop
4. break and continue
5. loop with arrays
6. forEach
7. map
8. filter

Loops are used to repeat tasks.
*/


/*FOR LOOP*/

/*
Syntax:

for(initialization; condition; update){
    code
}
*/

for(let i = 1; i <= 5; i++){
    console.log("Number:", i);
}

/*
i = 1 → start
i <= 5 → condition
i++ → increment
*/



/*WHILE LOOP*/

/*
Runs while condition is true
*/

let i = 1;

while(i <= 5){
    console.log("While:", i);
    i++;
}



/*DO-WHILE LOOP*/

/*
Runs at least once, even if condition is false
*/

let j = 1;

do{
    console.log("Do While:", j);
    j++;
}while(j <= 3);



/*BREAK AND CONTINUE*/

/*
break → stops loop completely
continue → skips current iteration
*/

for(let k = 1; k <= 5; k++){

    if(k === 3){
        continue; // skip 3
    }

    if(k === 5){
        break; // stop at 5
    }

    console.log("Loop:", k);
}



/*ARRAY LOOPING*/

let arr = [10, 20, 30, 40];

for(let i = 0; i < arr.length; i++){
    console.log("Array value:", arr[i]);
}



/*FOREACH (IMPORTANT)*/

/*
Used only for arrays
Cleaner than for loop
*/

arr.forEach(function(item){
    console.log("forEach:", item);
});


/*
Arrow function version
*/

arr.forEach(item => console.log("Arrow:", item));



/*MAP (VERY IMPORTANT)*/

/*
Creates a NEW array
Does not change original array
*/

let newArr = arr.map(item => item * 2);

console.log("Original:", arr);
console.log("Mapped:", newArr);



/*FILTER (VERY IMPORTANT)*/

/*
Returns elements that match condition
*/

let filtered = arr.filter(item => item > 20);

console.log("Filtered:", filtered);



/*REAL LIFE EXAMPLE*/

let users = ["Vikash", "Rahul", "Amit"];

users.forEach(user => {
    console.log("Welcome", user);
});



/*COMMON MISTAKES*/

/*
1. Infinite loop

while(true){
     never ends
}

2. Wrong condition

for(let i=0; i>=5; i++) 

3. Forgetting increment (i++)
*/


/*----------------------------------
FINAL NOTES
----------------------------------*/

/*
for → best for counting
while → condition-based loops
do-while → runs at least once

forEach → simple array loop
map → transform array
filter → select values

Golden rule:

Use map and filter in real projects
*/