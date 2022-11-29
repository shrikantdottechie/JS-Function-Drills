/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
function sayHello() {
    console.log('hello world');
}
sayHello();
/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
const print = ((message) => { console.log(message); });
print("Have a good one!");

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
const printMessage = ((message) => {
    console.log(`Today's message 
  is: ${message}`);
});
printMessage("Have a good one!");

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
let double = function (a) {
    return a * 2;
}
double(4); //prints 8
/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */
const reverseMessage = ((message) => {
    let newString = "";
    for (let i = message.length - 1; i >= 0; i--) {
        newString += message[i];
    }
    return newString;
});

const result = reverseMessage('Things are working well.');
console.log(result);
/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */
function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 2;
    return a * b;
}

multiply(2, 4); //prints 8
multiply(34); //prints 68

/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
const makePerson = {
    firstName: 'John',
    lastName: 'Doe'
};

makePerson.firstName = "Zakk";
makePerson.lastName = "F";
const makePerson1 = new Object();
makePerson1.firstName = "Jimmy";
makePerson1.lastName = "B";

/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */
function Human(n, a, w) {
    var name = n;
    var age = a;
    var weight = w;

    //Do something

    return {
        _name: name,
        _age: age,
        _weight: weight
    };
};

var someone = Human('John', 24, 56);

console.log(someone._name); // John
console.log(someone._age); // 24
console.log(someone._weight); // 56

/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */
function func() {
    return [5, "string", { a: 7 }];
}
console.log(func());
/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */
const total = ((number) => {
    /** Starter Code */
    let sum = 0
    return (sum += number);
});
for (let i = 0; i < 5; i++) {
    console.log(total(5));
};


  /*
     * Prompt 11:
     *
     * Write a function that takes an array of number values and returns the sum.
     * Test it out to make sure it works.
     * /*/
const func1 = ((arrayNumber) => {
    let sum = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        sum += arrayNumber[i];
    }
    return sum;
});
const result1 = func1([1, 4, 5, 9]);
console.log(result1); //prints 19
/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */
function getWords(text) {
    let x = text.replace(/[^A-Za-z0-9]+/g, " ");
    let newArr = x.trim().split(" ");
    return newArr;
};

let text = "The milkman brought donuts, cheese (along with milk), and a bottle of whiskey to 10 houses.";
console.log(getWords(text));
//output: ["The","milkman","brought","donuts","cheese","along","with","milk","and","a","bottle","of","whiskey","to","10","houses"]

/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
function testFunc(){
   return function() {console.log("this works!");};
};
testFunc()();



/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
function add(a, b) {
    return a + b;
};
const sum = ((add) => { return add(2, 4) });
console.log(sum(add));

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */

const outerFunc1 = (() => {
    return function () {console.log('hello world'); };
});
outerFunc1()();

