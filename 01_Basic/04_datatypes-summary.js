/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean

On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int.
String name = "John"; // name is a variable of type String.

JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/


/*
Primitive DataTypes:

Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

Boolean: Represents a binary value, either true or false, often used for conditional logic.

Undefined: Represents a variable that has been declared but hasn't been assigned a value yet.
Example: let x;

Null: Standalone value it is represenataion of empty value it is special type and it is a object type. 
Example: let y = null; 

Symbol (ES6): It is mostly used used to find uniqnece.

BigInt (ES11): Represents large integers that cannot be represented by the Number type.
*/

/*
Refence (Object Data Types): Non-primitive

Object: Represents a collection of key-value pairs (properties and methods). 
Example: { name: "John", age: 30 }.

Array: Represents a list-like collection of values, indexed by numbers (integer indices). 
Example: [1, 2, 3, 4].

Function: Represents a reusable block of code that can be invoked or called with arguments. 
Example: function add(x, y) { return x + y; }.

Date: Represents dates and times.

RegExp: Represents regular expressions for pattern matching.
*/



/*
lets talk about some Range of Primitive DataType:
Number:
Represents both integers and floating-point numbers.
Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
Smallest Increment: 2^(-52).
String:
Represents a sequence of characters.
No specific range limit, but practical limits depend on memory and system resources.

Boolean:
Represents true or false.
Only two possible values: true and false.

Undefined:
Represents a variable that has been declared but hasn't been assigned a value.
It has only one possible value: undefined.

Null:
Represents the intentional absence of any object or value.
It has only one possible value: null.

Symbol (ES6):
Represents a unique and immutable value.
No specific range limit.

BigInt (ES11):
Represents large integers that cannot be represented by the Number type.
The range is practically unlimited and depends on available memory.
*/

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false

console.log(typeof(id)); // symbol

// Array
const heros = ["Captain","Iron","Spider"];
console.log(typeof(heros)); // object

// Object
let myObj = {
    name:"aman",
    age:22
}

console.log(typeof(myObj)); // object

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(myFunction)) // function (object function)



/*
Return type of variables in JavaScript
Primitive Datatypes

Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

Non-primitive Datatypes

Arrays  =>  object
Function  =>  function
Object  =>  object
*/


