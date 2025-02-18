const name = "aman";
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// Hello my name is aman and my repo count is 50

/*
string decalare like object
It inherits properties and methods from the String object prototype, meaning you can do things like call .length, .toUpperCase(), etc.
*/

const gameName = new String("aman-kumar")
console.log(gameName[0]) //a
console.log(__proto__) //{}

// not change original string only change in copy

console.log(gameName.length) //10
console.log(gameName.toUpperCase()) //AMAN
console.log(gameName.charAt(3)) //n
console.log(gameName.indexOf('m')) //1

/*
The .substring(start, end) method is used to extract a portion of the string starting from index start (inclusive) to index end (exclusive).
*/
const newString = gameName.substring(0,3); //inclusive of 0, exclusive of 3).
console.log(newString) //ama



/*
slice:- string.slice(startIndex, endIndex)
If startIndex is greater than endIndex, an empty string/array will be returned.
If startIndex is negative, it counts from the end of the string/array.
slice() doesn't modify the original string/array; it returns a new one.
If the endIndex is not provided, it slices from startIndex to the end.
startIndex - (inclusive).
endIndex - (exclusive).
*/

const anotherString = gameName.slice(-8,-1); //"aman-kumar"
console.log(anotherString) //an-kuma 


const newStringOne = "   aman.   "
console.log(newStringOne) //    aman.  give space 
console.log(newStringOne.trim()) //aman. trim the space between string.


const url = "https://www.programiz.com/javascript/online-compiler/";

console.log(url.replace('://', '--'));
//https--www.programiz.com/javascript/online-compiler/

console.log(url.includes('compiler')) //true


/*
The split() method in JavaScript is used to split a string into an array of substrings based on a specified separator (delimiter).
string.split(separator, limit);
*/

let str = "apple,banana,cherry";
let fruits = str.split(",");
console.log(fruits);  //[ 'apple', 'banana', 'cherry' ]

let sentence = "apple1banana2cherry3dates";
let fruits2 = sentence.split(/\d/);  //Split by any digit (0-9)
console.log(fruits2);  //[ 'apple', 'banana', 'cherry', 'dates' ]