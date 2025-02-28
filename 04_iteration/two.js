
// for...of Loop:
// for (const item of iterable) {
//     // Code to execute for each item in the iterable
// }

const arr = [1, 2, 3, 4, 5];

for(const i of arr){
    console.log(i);
}
// 1
// 2
// 3
// 4

const greetings = "Hello world!";
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !


// Map the map holds key-value pairs and remember the original insertion order of the keys
// unique

const map = new Map();
map.set('IN', "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");


console.log(map);

for(const key of map){
    console.log(key);
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for(const [key, value] of map){
    console.log(key, ":-", value);
}
// IN :- India
// USA :- United States of America
// Fr :- France

for(const [key, value] of map){
   console.log(`key ${key}, value ${value}`);
}
// key IN, value India
// key USA, value United States of America
// key Fr, value France




//object not iterable like map
const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}
  
for(const [key, value] of myObject){
    console.log(key, value);
}
// myObject is not iterable



// making object iterable 
const person = {
    name: 'John',
    age: 25,
    job: 'developer'
};

console.log(Object.keys(person)); 
// [ 'name', 'age', 'job' ]

console.log(Object.values(person));
// [ 'John', 25, 'developer' ]

console.log(Object.entries(person)); 
// [ [ 'name', 'John' ], [ 'age', 25 ], [ 'job', 'developer' ] ]

for(const i of Object.keys(person)){
    console.log(`${i}`);
}
// name
// age
// job

for(const i of Object.values(person)){
    console.log(`${i}`);
}
// John
// 25
// developer

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
// name: John
// age: 25
// job: developer


  // Destructuring the object
const person1 = {
    name: 'John',
    age: 25,
    job: 'developer'
  };
  
  // Destructuring the object
  let { name, age, job } = person1;
  
  console.log(name);  // Output: John
  console.log(age);   // Output: 25
  console.log(job);   // Output: developer






