const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function greet(){})
// for each is callback so function name is not present
// coding.forEach(function (){})

coding.forEach( function (val){
    console.log(val);
})
// js
// ruby
// java
// python
// cpp

//using arrow function
// coding.forEach(greet = () => {})

coding.forEach((value) =>{
    console.log(value)
})
// js
// ruby
// java
// python
// cpp


function printMe(item){
    console.log(item)
}
coding.forEach(printMe)
// js
// ruby
// java
// python
// cpp


coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach((item, index, arr) =>{
//     console.log(item,index,arr)
// })

myCoding.forEach((item) =>{
    console.log(item)
})
// { languageName: 'javascript', languageFileName: 'js' }
// { languageName: 'java', languageFileName: 'java' }
// { languageName: 'python', languageFileName: 'py' }


myCoding.forEach((item) =>{
    console.log(item.languageName)
})
// javascript
// java
// python

