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



/*
------------------------------------------
3. PRIVATE PROPERTIES
------------------------------------------

# means private (cannot access outside class)
*/

class BankAccount {
    #balance;   // private property

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let acc = new BankAccount(1000);

acc.deposit(500);

console.log(acc.getBalance());

/*
console.log(acc.#balance);  error (private)
*/



/*
------------------------------------------
4. STATIC vs NORMAL METHOD
------------------------------------------

Normal method:
- belongs to object

Static method:
- belongs to class
*/



/*
------------------------------------------
5. REAL EXAMPLE: COMPLEX NUMBERS
------------------------------------------

Complex number = a + bi

Example:
2 + 3i
4 + 5i

Addition:
(2+3i) + (4+5i) = (6 + 8i)
*/


class Complex {
    #real;
    #imaginary;
    constructor(real, imaginary) {
        this.#real = real;
        this.#imaginary = imaginary;
    }

    /*
    method to display number
    */
    display() {
        console.log(this.#real + " + " + this.#imaginary + "i");
    }
    get real(){
        return this.#real;
    }
    get imaginary(){
        return this.#imaginary;
    }
    /*
    method to add another complex number
    */
    add(other) {
        this.#real += other.real;
        this.#imaginary += other.imaginary;
    }
}


let c1 = new Complex(2, 3);
let c2 = new Complex(4, 5);

/*
adding c1 and c2
*/
c1.add(c2);

c1.display();



/*
------------------------------------------
6. FINAL UNDERSTANDING
------------------------------------------

static:
- belongs to class
- called using ClassName

getter:
- access value like property

setter:
- update value with control

private (#):
- hidden from outside

real example:
- complex numbers show real use of class
*/