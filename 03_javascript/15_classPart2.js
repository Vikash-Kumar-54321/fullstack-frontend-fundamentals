/*
TOPIC:
- static methods
- getters and setters
- private properties
- real example (Complex Numbers)
*/



/*
------------------------------------------
1. STATIC METHODS
------------------------------------------

static method belongs to class, not object

Meaning:
- we call using ClassName.method()
- not using object
*/

class MathUtils {

    // static method
    static add(a, b) {
        return a + b;
    }
}

/*
calling static method
*/

console.log(MathUtils.add(2, 3));

/*
Important:
let obj = new MathUtils();
obj.add() //error

Because static method is not inside object
*/



/*
------------------------------------------
2. GETTERS AND SETTERS
------------------------------------------

Used to control access of data
*/


class User {
    constructor(name) {
        this._name = name;   // convention: _ means internal use
    }

    // getter → used like property
    get name() {
        return this._name;
    }

    // setter → used to update value
    set name(newName) {
        if (newName.length < 3) {
            console.log("Name too short");
            return;
        }
        this._name = newName;
    }
}

let u1 = new User("Vikash");

/*
getter works like property, not function
*/
console.log(u1.name);

/*
setter also used like property
*/
u1.name = "Vi";   // too short
u1.name = "Rahul";

console.log(u1.name);


