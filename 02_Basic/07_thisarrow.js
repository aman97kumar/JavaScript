const user ={
    username: "Aman",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${user.username}, welcome to website`);
    }
}

user.welcomeMessage();
// Aman, welcome to website
user.username = "kumar";
user.welcomeMessage();
// kumar, welcome to website

const user = {
    username: "Aman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
// {
//   username: 'Aman',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// Kumar, welcome to website
// {
//   username: 'Kumar',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

    }
};

user.welcomeMessage();
// Output: Aman, welcome to website
user.username = "Kumar";
user.welcomeMessage();   
// Output: Kumar, welcome to website


// Advantage of Using this (with Reusability):
// Let's say you create another object, and you want to use the same welcomeMessage method:

const anotherUser = {
    username: "John",
    price: 123,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
};

anotherUser.welcomeMessage();  
// Output: John, welcome to website

// If you use this.username, the welcomeMessage method can now be used with anotherUser as well. It dynamically refers to whichever object calls the method, making your code more flexible and reusable.



console.log(this); //{} in node environment

console.log(this); 
/* 
Output: Window { ... } in the browser
In this case, this points to the window object because in the browser, the global context (outside any function) refers to window.
This means that all the global variables and functions are properties of the window object, so this refers to window.
*/

function globalFunction() {
    console.log(this); //In Node.js, this will refer to 'module.exports' in global scope
}
globalFunction();


function globalFunction() {
    let username = "aman";
    // this.username = "aman";  // Attach 'username' as a property of the global object
    console.log(this.username);
}
globalFunction(); //undefined

// this.username will not access the local username variable inside the function, because this refers to an object (like window in the browser or module.exports in Node.js), not to the local variables in the function.


const chai = function(){
    let username = "kumar";
    console.log(this.username);
}
chai(); //undefined


const chai1 = ()=>{
    let username = "kumar";
    console.log(this.username);
}
chai(); //undefined

// Arrow functions do not have their own this; they inherit this from the surrounding scope.
// In this case, the surrounding scope is the global context, so this refers to the global object, which does not have a username property, so the result is undefined.

// () => {} arrow function.

const addTwo = (num1, num2) => {
    return num1 + num2;
}
// console.log(addTwo(2,3))
// First version requires an explicit return.

//const addTwo1 = (num1, num2) =>  num1 + num2;
const addTwo1 = (num1, num2) =>  (num1 + num2); // not write return keyword
console.log(addTwo(2,3));
console.log(addTwo1(10,3));
// Second and third versions use implicit returns. The second version omits parentheses, while the third version includes parentheses around the expression (which is unnecessary but can improve clarity in more complex cases).



// const addTwo2 = (num1, num2) => {
//   return { username: "aman"}
// }
// console.log(addTwo2(10,3));

const addTwo2 = (num1, num2) => ({ username: "aman" });
console.log(addTwo2(10, 3));
// When using an arrow function with curly braces, JavaScript expects a function body and doesn't automatically return the value. You need to either use return or remove the curly braces for an implicit return.



