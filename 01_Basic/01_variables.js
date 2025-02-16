const accountId = 1444553;
let accountEmail = "aman@gmai.com";
var accountPassword = "123@122";
accountCity = "jaipur"

// accountId = "greater noida";  Assignment to constant variable. not allowed

console.log(accountId);
accountEmail = "kumar@gmail.com";
accountPassword = "123432";
accountCity = "delhi";

// let accountState; undefined variable declare without value initialise.

console.table([accountEmail,accountId,accountPassword,accountCity]);


// {} is called scope in js.
// let and const is used not var.

/*
comment in js 
prefer not use var.
because of issue in block scope and functional scope
*/

/*
In summary:-
var: Function/global scope, hoisted, can be redeclared and reassigned.

let: Block scope, hoisted but not initialized, can be reassigned but not redeclared.

const: Block scope, hoisted but not initialized, cannot be reassigned or redeclared.
*/