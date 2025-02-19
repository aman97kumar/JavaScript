
/*
->js arrays are resizable and can contains a mix of different data types. js arrays are zero-indexed, shallow copy create.

->shallow copy of an object is a copy whose properties share the same reference.

->deep copy - a deep copy of an object is a copy whose propeties do not share the same references.
*/
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]); //0

// array methods
myArr.push(6); //add in last
console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 6 ]

myArr.push(7);
console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 6, 7 ]

myArr.pop() // remove last value
console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 6 ]

myArr.unshift(9);
/*
The unshift() method adds elements to the start of the array.
It modifies the original array.
It returns the new length of the array.
It can take multiple elements as parameters.
Time consuming process shift all value by 1 postion in array.
*/

console.log(myArr); //[ 9, 0, 1, 2, 3, 4, 5, 6 ]

myArr.shift(); 
/*No parameters are accepted by shift().
It always removes the first element of the array.
It modifies the original array.
*/
console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 6 ]

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(9)); //-1

const newArr = myArr.join(); //bind and convert into string

console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 6 ]
console.log(newArr); //0,1,2,3,4,5,6 array converted into string
console.log(typeof (newArr)); // string

/*
slice:- array.slice(startIndex(inclusive), endIndex(exclusive));
It is used to extract a portion of an array or string without modifying the original array or string.
*/
console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr.slice(1, 3);
console.log(myn1); //[1, 2];

console.log("B ", myArr); //B [ 0, 1, 2, 3, 4, 5, 6 ]

/*
splice:-
It is used to change the contents of an array by removing, replacing, or adding elements.
It modifies the original array.
It returns the array of removed elements (if any).
*/
const myn2 = myArr.splice(2, 3); // Remove 3 elements starting from index 2

console.log(myn2); //[ 2, 3, 4 ]

console.log("C ", myArr); //C  [ 0, 4, 5, 6 ]




