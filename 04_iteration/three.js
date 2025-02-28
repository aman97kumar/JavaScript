
// for...in
// for (const key in object) {
//     // Code to execute for each property/key
// }


const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    console.log(key)
}
// js
// cpp
// rb
// swift

for(const key in myObject){
    console.log(myObject[key])
}
// Javascript
// C++
// ruby
// swift by apple

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// js shortcut is for Javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const programming =["js", "rb", "java", "cpp"];

//give keys of array
for(const i in programming){
    console.log(i)
}
// 0
// 1
// 2
// 3

// value
for(const i in programming){
    console.log(programming[i])
}
// js
// rb
// java
// cpp

// directly value using for...of loop
// for(const i of programming){
//     console.log(i)
// }
// js
// rb
// java
// cpp


//for...in is for iterating over properties of plain objects, not Map objects.
const map = new Map();
map.set('IN', "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // This will overwrite the previous "IN" key-value pair

// Attempting to use `for...in` (will not work)
for (const key in map) {
  console.log(key); // This will not work as expected for Map
}


