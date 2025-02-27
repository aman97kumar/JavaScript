const score = 200;

if(score > 100){
    let power = "fly";
    console.log(`User power: ${power}`); //User power: fly
}
 console.log(`User power: ${power}`); //power is not defined

const userLoggedIn1 = true;
const debitCard1 = true;

if(userLoggedIn1 && debitCard1){
    console.log("Allow to buy course"); //Allow to buy course
}


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow to buy course");
}
// Allow to buy course

if( userLoggedIn && debitCard && (loggedInFromEmail || loggedInFromGoogle) ){
    console.log("Allow to buy course");
}
// Allow to buy course

///////////////////////switch/////////////////////

// switch(key){
//     case value:
//     break;
    
//     default:
//     break;
// }

const month = 3;
// switch(month){
//     case 1:
//         console.log("jan")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     default:
//         console.log("invald month enter")
        
// }

// const userEmail = "aman@.ai";
// if(userEmail) {
//     console.log("Got user email");
// }
// else {
//     console.log("Don't have user email");
// }

const userEmail = -0;
if(userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", " ", "false", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}



const emptyObj = {
    name:"aman",
    age:28
    
}
console.log(Object.keys(emptyObj));
//[ 'name', 'age' ]

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}
//Object is not empty

const emptyObj1 = {};
console.log(Object.keys(emptyObj1)) 
//[]

if(Object.keys(emptyObj1).length === 0){
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}
//Object is empty

false == 0 // true
false == ''// true
0 == '' // true


//Nullish Coalescing Operator (??): null undefined

/*
The nullish coalescing operator (??) only replaces null or undefined values, not other falsy values like 0, false, or ''.
It's particularly useful when you want to provide a default value only when the value is truly absent (null or undefined).
*/

let val1;
val1 = 5 ?? 10;
console.log(val1) //5

let val2;
val2 = null ?? 10;
console.log(val2); //10

let val3;
val3 = undefined ?? 15;
console.log(val3); //15

 val4 = null??undefined??10??15;
 console.log(val4); //10


//ternary operator 
// condition ? valueIfTrue : valueIfFalse;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");
//more than 80


