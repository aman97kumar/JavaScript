// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log(`DB CONNECTED`);
} 
chai(); //DB CONNECTED

(function chai(){
    console.log(`DB CONNECTED`);
}) (); //DB CONNECTED


// Without IIFE, userName would be a global variable that could accidentally conflict with other code or libraries.
// With IIFE, the variable is encapsulated and will not interfere with other code.
// Without IIFE
var userName = 'John'; // This variable is in the global scope

// With IIFE
(function() {
    var userName = 'John'; // This variable is scoped to the IIFE
})();
// userName does not exist in the global scope anymore


// Without IIFE, this would overwrite the same counter variable
for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);  // Output: 3, because `i` is available outside the loop

// Using IIFE for block scoping
for (var i = 0; i < 3; i++) {
    (function(i) {
        console.log(i);  // Output: 0, 1, 2
    })(i);
}


//  Avoid Global Namespace Pollution
(function() {
    var tempVar = "This is local";
})();
console.log(tempVar); // ReferenceError: tempVar is not defined

/*
Benefits:
Avoids Global Namespace Pollution:

Variables inside the IIFE are scoped locally, preventing them from affecting the global scope.
Simulates Block Scoping (before ES6):

Allows block-scoping behavior for variables declared with var, which traditionally has function-level scope.
Encapsulation and Data Privacy:

Provides private variables and methods that are not accessible outside the IIFE, ensuring data privacy.
Immediate Execution:

Executes the function immediately after it is defined, useful for initialization or configuration code.
Legacy Support (before ES6):

Since ES6 introduced let and const for block-scoping, IIFEs were used as a workaround for scoping issues in older JavaScript versions.
Isolation of Logic:

Helps in isolating logic and preventing accidental interference with other parts of the code.
*/

// named IIFE
(function chai(){
    console.log(`db connected`);
})();
// use ; for end iife and context of one

(()=>{
    console.log(`db connected two`);
}) ();


((name)=>{
    console.log(`db connected two ${name}`);
}) ("aman");

// db connected
// db connected two
// db connected two aman



(function() {
    console.log("First IIFE");
})();  // Semicolon at the end

(function() {
    console.log("Second IIFE");
})();  // Semicolon at the end

/*
Using semicolons after each IIFE ensures proper termination and avoids issues caused by automatic semicolon insertion.
While not always strictly required, it’s a good practice to use semicolons to make your code more robust and avoid potential parsing errors when chaining multiple IIFEs.
*/





