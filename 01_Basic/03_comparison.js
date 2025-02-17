//in comparison check datatypes of both value.
console.log("2">1) // true
console.log("02">1) // true

console.log(null > 0) // false
console.log(null < 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
console.log(null <= 0) // true

/* 
The reason is that an equality check == and comparisons >, <, >=, <= work differently.

comparisons convert null to a number, treating it as 0.
that's why null > 0 is false and null >= true
*/


/*
When comparing null with 0 using ==, JavaScript does not coerce null to a number. The special rule for null with == is:

null == undefined is true.

But null == 0 or null == any other value (except undefined) is false.
*/


console.log(null == undefined) // true
console.log(null <= undefined) // false
console.log(null > undefined) // false 


// ==: Compares values with type coercion.
// ===: Compares values without type coercion, checking both value and type.

console.log( "2" === 2) // false









