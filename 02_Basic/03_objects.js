
//singelton, constructor make singelton.
//Object.create

// literal not make singelton

// object literal

// const JsUser = {};

const JsUser = {
    name: "Aman",
    "full name": "Aman Kumar",
    age: 23,
    location: "Greater noida",
    email: "aman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email) //aman@google.com

//console.log([email]) //  email is not defined
//console.log(JsUser.full name) // not accessible
//console.log(JusUser."full name") // not accessible

console.log(JsUser["full name"]) //Aman Kumar
console.log(JsUser["email"]) //aman@google.com

// value change in object

JsUser.email = "kumar@gmail.com";
console.log(JsUser.email); //kumar@gmail.com

// for make not change in object
// Obect.freeze(JsUser)

// function in object
JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greeting() //Hello JS user

console.log(JsUser.greeting()); 
//Hello JS user
//undefined
/* 
First example: Directly calling the method prints only the log from greeting().
Second example: Calling the method inside console.log() prints both the log from greeting() and the function’s return value (undefined).
*/
 
JsUser.greetingTwo = function(){
     console.log(`Heloo JS user ${this.name}`)
 }
 JsUser.greetingTwo() //Heloo JS user Aman

 console.log(JsUser.greetingTwo());
 //Heloo JS user Aman
//undefined
 
 
 //Decalaration Symbole in object
const mySym = Symbol("key1");

const user1 = {
    name: "kumar",
    mySym: "123abc"
}

console.log(user1.name) //kumar
console.log(user1.mySym) //123abc
console.log(typeof(user1.mySym)) //string
// not use like symbol 


// for make like symbol
const mySym1 = Symbol("key1");
const user2 = {
    name: "kumar",
    [mySym1]: "123abc"
}

console.log(user1.name); //kumar
console.log([mySym1]); //[ Symbol(key1) ]
console.log(typeof[mySym]); //object


// this
// Defining the first object
const JsUser = {
    name: "Kumar",
    greeting: function() {
        console.log(`Hello JS user, ${this.name}`);
    }
};

// Defining the second object
const AnotherUser = {
    name: "John",
    greeting: function() {
        console.log(`Hello JS user, ${this.name}`);
    }
};

// Calling the greeting method for both objects
JsUser.greeting();  // Output: Hello JS user, Kumar
AnotherUser.greeting();  // Output: Hello JS user, John































