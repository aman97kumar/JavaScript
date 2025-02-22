
//var c = 30;
let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    console.log("Inner: ", a); //10
}

console.log(a); //300

function one(){
    const username = "aman";
    
    function two(){
        const website = "youtube";
        console.log(username); 
    }
    
    console.log(website); //website is not defined
    
    two(); //aman
}
one();


if(true) {
    const username = "aman";
    if(username === "aman") {
        const website = " youtube";
        console.log(username + website); //aman youtube
    }

    console.log(website); //website is not defined
}

console.log(username); //username is not defined



// +++++++++++++++++++++intresting+++++++++++++++++++

/*
Function Declaration:
A function declared in the traditional way (like function addOne(num) { ... }) is hoisted to the top of its scope. This means that the function definition is moved to the top during the compilation phase (before the code is executed), and the function can be used anywhere in the scope, even before the line where it’s defined.
*/

console.log(addOne(5)); //6
function addOne(num) {
    return num + 1;
}
console.log(addOne(5)); //6

/*
Function Expression:
A function expression, like const addTwo = function(num) { ... }, is not hoisted in the same way. While the variable declaration addTwo is hoisted, the assignment of the function to addTwo happens at runtime, after the execution reaches the line where the function is defined. As a result, trying to call the function before its definition leads to an error
*/

console.log(addTwo(5));
//Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));



