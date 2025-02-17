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
