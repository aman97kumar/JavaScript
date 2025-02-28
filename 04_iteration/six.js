
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num = myNumbers.map((val) => val*2);
// console.log(num)

// const num = myNumbers.map((val) => {
//     return val+10;
// });
// console.log(num)

const newNums = myNumbers
 .map((num) => num*10)
 .map((num) => num + 1)
 .filter((num) => num >= 40)

 console.log(newNums);
//  [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]

///////////reduce/////////////////////

// const numbers = [1, 2, 3, 4, 5];

// // Using reduce to sum the array elements
// const sum = numbers
// .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);  // Output: 15



const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0)
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
console.log(myTotal); // 6


const myTotal1 = myNums.reduce((acc, curr) => acc + curr,0)
console.log(myTotal1); // 6

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 999,
    },
    {
        itemName: "Mobile Dev course",
        price: 5999,
    },
    {
        itemName: "Data science course",
        price: 12999,
    }
]


// const total = shoppingCart.reduce((acc, currval)=>acc+currval.price,0)
const total = shoppingCart.reduce((acc, currval) =>{
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval.price;
}, 0)
console.log(total);

// acc: 0 and currval: [object Object]
// acc: 2999 and currval: [object Object]
// acc: 3998 and currval: [object Object]
// acc: 9997 and currval: [object Object]
// 22996