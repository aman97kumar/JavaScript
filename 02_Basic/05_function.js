
function sayMyname(){
    console.log("A"),
    console.log("M"),
    console.log("A"),
    console.log("N")
}

sayMyname // reference
sayMyname() // execute
// A
// M
// A
// N

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(1,3) //4

const result = addTwoNumbers(1,3);//4
console.log(result); //undefined function not return anything


function addTwoNum(number1, number2){
    let res = number1 + number2
    return res;
    // return number1 + number2;
}
console.log(addTwoNum(34,2)) //36


 function loginUserMessage(username){
     return `${username} just logged in`
 }
console.log(loginUserMessage("aman"))
//aman just logged in


function loginUserMessage(username){
    if(!username){
    console.log("please enter a username");
    return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage(""))
// please enter a username
/*
undefined
The condition if (!username) checks if the username is "falsy".
In JavaScript, falsy values include:
false
0
"" (empty string)
null
undefined
NaN
*/

function loginUserMessa(username){
    if(username===undefined){
    console.log("please enter a username");
    return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessa(""))
//  just logged in
// username === undefined checks for exactly undefined, so it does not treat other falsy values like an empty string as undefined.

function calculateCartPrice(num1){
   return num1;
}
console.log(calculateCartPrice(1)); //1
console.log(calculateCartPrice(1,2,1,3,4)); //1


function calculateCartPrices(...num1){
   return num1;
}
console.log(calculateCartPrices(12,13,40));
//[ 12, 13, 40 ] return value in array.


function calculateCartPrices1(val1, val2, ...num1){
   return num1;
}
console.log(calculateCartPrices1(120,130,400,500))
//[ 400, 500 ]
/*
Rest parameter (...num1) allows you to collect all the remaining arguments into an array.
In this case, 120 and 130 are assigned to val1 and val2 respectively, and the rest of the values (400, 500) are collected in the array num1.
*/


//object pass in function
const user = {
   username: "hitesh",
   prices: 199
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
}

handleObject(user);
//username is hitesh and price is 199


function handleObject1(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject1({
   username: "sam",
   price: 399
});
//username is sam and price is 399



//function return second value of array
const myNewArray = [200, 400, 600]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray)); //400





