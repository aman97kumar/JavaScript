let score = 33;
console.log(typeof(score)); // number

let score = "33"; // string
let valueInNumber = Number(score); // string to number conversion.
console.log(typeof(valueInNumber)); // number


let score = "33abc"; // string
let valueInNumber = Number(score); // string to number conversion.
console.log(typeof(valueInNumber)); // number
console.log(valueInNumber); // NaN, not a number.


let score = null; // null
let valueInNumber = Number(score); // null to number conversion.
console.log(typeof(valueInNumber)); // number
console.log(valueInNumber); // 0


let score = undefined; // undefined
let valueInNumber = Number(score); //undefined to number conversion.
console.log(typeof(valueInNumber)); // number
console.log(valueInNumber); // NaN


let score = true; // boolean
let valueInNumber = Number(score); // boolean to number conversion.
console.log(typeof(valueInNumber)); // number
console.log(valueInNumber); // 1


/*
different datatypes convert into number like this
"33" => 33
"33abc" => NaN
undefined => NaN
true => 1; false => 0;
null => 0

*/


let isLoggedIn = 1; // number
let booleanIsLoggedIn = Boolean(isLoggedIn); // conversion number to boolean
console.log(booleanIsLoggedIn); // true

/*
conversion in boolean 
1 => true; 0 => false;
"" => false;  empty string
"aman" => true;
*/

let someNumber = 33; // number
let stringNumber = String(someNumber); // coversion number to string
console.log(stringNumber); // 33
console.log(typeof(stringNumber)); // string



// some other js topic

let str1 = "aman"
let str2 = " kumar"
let str3 = str1+str2; 
console.log(str3) // aman kumar

console.log(2**3) // 2 to power 3
console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1"+2+2) // 122
console.log(1+2+"2") // 32
console.log(+true) // 1
console.log(+"") // 0


//don't write these type of code
let num1, num2, num3
num1=num2=num3=4

let gameCounter=0
gameCounter++ // postfix
console.log(gameCounter) // 1

let x = 3;
const y = x++; // postfix first assign then increment
console.log(y) // 3
console.log(x) // 4


let w = 3;
const z = ++w; // prefix first increment then assign
console.log(z) //4
console.log(w) //4

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`); // Expected output: "a:4, b:4"

















