const score = 100;
console.log(score) //100

const balance = new Number(200);
console.log(balance) //[Number: 200]

console.log(balance.toString()); //200
console.log(balance.toString().length); //3

console.log(balance.toFixed(3)); //200.000

const anotherNumber = 23.986;
console.log(anotherNumber.toPrecision(2)); //24

console.log(anotherNumber.toPrecision(3)); //24.0

console.log(anotherNumber.toPrecision(4)); //23.99

const hundereds= 1000000;
console.log(hundereds.toLocaleString()); //1,000,000

console.log(hundereds.toLocaleString("en-IN")); //10,00,000


console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); //4

console.log(Math.round(3.4)); //3

console.log(Math.round(4.6));  //5

console.log(Math.ceil(4.1)); //5

console.log(Math.floor(4.9)); //4

console.log(Math.min(1,4,2,0,6,2)); //0
console.log(Math.max(1,4,2,6,2,1)); //6

// 0 ≤ Math.random() < 1
console.log(Math.random()); //value is between 0 and 1

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

//find random no between max and min
let max=20;
let min=10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);





