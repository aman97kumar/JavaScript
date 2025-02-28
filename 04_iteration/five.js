
const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) => {
    //console.log(item); 
    return item; //undefined
})
console.log(values);
//Returns undefined. No new array is created.


// The filter method is used to create a new array with all the elements that pass a test (i.e., meet a specific condition) defined in the provided callback function. 
// It does not modify the original array; instead, it returns a new array with the elements that satisfy the condition.

// array.filter(callback(currentValue, index, array) {
//     // return true or false
//   })
  

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter((num) =>{
    return num>4;
})

const newNums1 = myNums.filter((num) => num>5);

console.log(newNums);
//[ 5, 6, 7, 8, 9, 10 ]

console.log(newNums1);
//[ 6, 7, 8, 9, 10 ]


const newNums2 = [];
myNums.forEach((num)=>{
    if(num > 5){
        newNums2.push(num) // Manually creating a new array
    }
})
console.log(newNums2)
// [ 6, 7, 8, 9, 10 ]


/*
Using forEach() (No new array is returned):
const arr = [1, 2, 3, 4, 5];

let evenNumbers = [];
arr.forEach((num) => {
  if (num % 2 === 0) {
    evenNumbers.push(num);  // Manually creating a new array
  }
});

console.log(evenNumbers);  // Output: [2, 4]


Using filter() (A new array is returned automatically):


const arr = [1, 2, 3, 4, 5];

const evenNumbers = arr.filter((num) => num % 2 === 0);

console.log(evenNumbers);  // Output: [2, 4]
*/


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
];

const userBooks = books.filter((bk) => bk.genre == "History");
console.log(userBooks);
// [
// {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]


// const userBooks1 = books.filter((bk)=>bk.publish >= 2000)
// console.log(userBooks1);

// const userBooks1 = books.filter((bk)=>{
//    return bk.publish >= 2000
// })
// console.log(userBooks1);


// book should be history category and publish > 2000

// const userBooks1 = books
// .filter((bk)=> bk.genre==="History")
// .filter((bk) => bk.edition>2000);

//  console.log(userBooks1);
//  [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]





// const userBooks1 = books
// .filter((bk)=> bk.genre === "History")
// .filter((bk) => bk.publish >= 1995);

const userBooks1 = books.filter((bk)=> {
    return bk.publish >=1995 && bk.genre === "History"
})


 console.log(userBooks1);
//  [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]


