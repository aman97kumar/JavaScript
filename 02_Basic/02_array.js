

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);

console.log(marvel_heros);
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//console.log(marvel_heros[3][0]);
//superman

//console.log(marvel_heros[3][2]);
//batman


/*
The concat() method in JavaScript is used to merge two or more arrays. It does not change the existing arrays but returns a new array that contains the elements of all the arrays being concatenated.
*/
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

/*
spread operator:-
Spread syntax (...): A more general syntax used for unpacking and merging elements of arrays, also returns a new array.
*/

const allHeros1 = ([...marvel_heros, ...dc_heros]);
console.log(allHeros1);
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// The flat(Infinity) method is used to recursively flatten the array, no matter how deeply nested the arrays are.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

/*
Array.isArray()
This method is used to check if a given object is an array or not. It returns true if the object is an array, otherwise false.
*/
console.log(Array.isArray("hitesh")); // false
// Converting a String to an Array:
console.log(Array.from("hitesh")); //[ 'h', 'i', 't', 'e', 's', 'h' ]


console.log(Array.from({name: "aman"})); // [] interesting
//Array.from({name: "aman"}) returns an empty array because regular objects are not iterable and don’t have the required properties to be treated as array-like objects.


let score1 = 100;
let score2 = 200;
let score3 = 400;
let score4 = 300;
console.log(Array.of(score1,score2,score3,score4));
//[ 100, 200, 400, 300 ]
/*
Array.of():-
This method creates a new array instance with a variable number of elements passed as arguments.
*/











