//memory allocation of primitive and non-primitive datatypes.

/*
pass by value:
Primitive datatypes:call by value (String, Number, Boolean, null, undefined, BigInt, Symbol): Stack memory
only change in copy not in original reference
*/

let myYoutubename = "amandotcom";
let anotherName = myYoutubename;
console.log(myYoutubename) // amandotcom
console.log(anotherName) // amandotcom

anotherName = "kumardotcom";
console.log(myYoutubename) // amandotcom
console.log(anotherName) // kumardotcom


/*
pass by reference:
When an object is created, it is stored in the heap, and a reference to that object is stored in the stack
When you assign an object to another variable, you're passing a reference to that object in memory, not a copy of it.
*/

/*Both userOne and userTwo point to the same object in heap memory.
Changing userTwo.email also updates userOne.email, because they refer to the same object in memory.
*/

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
console.log(userOne.email) // user@google.com

let userTwo = userOne; // reference pass
userTwo.email="jk@gmail.com"

console.log(userOne.email) // jk@gmail.com
console.log(userTwo.email) // jk@gmail.com