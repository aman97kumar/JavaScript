
// for loop
for(let i=0; i<=10; i++){
    const index =i;
    console.log(index);
}

for(let i=1; i<=10; i++){
    console.log(`outer loop value: ${i}`);
    for(let j=1; j<=10; j++){
         //console.log(`outer loop value: ${j} and inner loop ${i}`);
         console.log(i + '*' + j + ' = ' + i*j);
    }
}

for (let i = 0; i < 3; i++) { // Outer loop
  console.log('Outer loop iteration: ' + i);
  
  for (let j = 0; j < 2; j++) { // Inner loop
    console.log('  Inner loop iteration: ' + j);
  }
}

// Outer loop iteration: 0
//   Inner loop iteration: 0
//   Inner loop iteration: 1
// Outer loop iteration: 1
//   Inner loop iteration: 0
//   Inner loop iteration: 1
// Outer loop iteration: 2
//   Inner loop iteration: 0
//   Inner loop iteration: 1



let myArray = ["flash", "batman", "superman"];

for(let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}
// flash
// batman
// superman


// break and continue

for(let i=1; i<=20; i++){
    
    if(i==5){
        console.log(`detected 5`)
        break;
    }
    console.log(`value of i is ${i}`);
}


for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;  // Skips when i is 2
  }
  console.log(i);
}

// 0
// 1
// 3
// 4


////////////////////while and do while loop in js/////////////////


let index = 0;
while (index <= 10){
    console.log(`value of index is ${index}`)
    index++;
}


let myArray1= ["flash", "batman", "superman"];
let i =0;
while(myArray1.length>i){
    console.log( myArray1[i])
    i++;
}

// flash
// batman
// superman


// do {
    
// }while(condition);

let score = 1;

do {
    console.log(`score is ${score}`);
    score++;
} while(score <= 10)

// score is 1
// score is 2
// score is 3
// score is 4
// score is 5
// score is 6
// score is 7
// score is 8
// score is 9
// score is 10

let score1 = 11;

do {
    console.log(`score is ${score1}`);
    score++;
} while(score <= 10)
//score is 11

