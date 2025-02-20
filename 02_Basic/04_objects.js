
//singleton constructor

// const tinderUser = new Object(); // singleton object
// console.log(tinderUser) //{}

const tinderUser = {}; //not a singleton object
console.log(tinderUser) //{}

 tinderUser.id = "123abc";
 tinderUser.name = "Sammy";
 tinderUser.isLoggedIn = false;
 
 console.log(tinderUser);
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));
//Object.keys() returns an array of property names (keys).
//[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
//Object.values() returns an array of property values.
//[ '123abc', 'Sammy', false ]


/*
The result of Object.entries() is an array of arrays, where each sub-array contains two elements:
The first element is the key.
The second element is the value.
*/
console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
//true

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aman",
            lastname: "kumar"
        }
    }
}

console.log(regularUser);
//{
//   email: 'some@gmail.com',
//   fullname: { userfullname: { fistname: 'aman', lastname: 'kumar' } }
// }

console.log(regularUser.fullname);
//{ userfullname: { fistname: 'aman', lastname: 'kumar' } 

console.log(regularUser.fullname.userfullname);
//{ firstname: 'aman', lastname: 'kumar' }

console.log(regularUser.fullname.userfullname.firstname);
//aman

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

/*
Object.assign() copies the properties of obj2 into obj1, mutating obj1 in place.

So, obj1 is changed to include the properties of obj2, and obj4 ends up referencing the same object as obj1. This means that changes to obj4 will affect obj1 and vice versa.
*/


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj4 = Object.assign(obj1, obj2);

console.log(obj4); // {1: "a", 2: "b", 3: "a", 4: "b"}
console.log(obj1); // {1: "a", 2: "b", 3: "a", 4: "b"}

// Now, change a value in obj4
obj4[1] = "c";

console.log(obj4); // {1: "c", 2: "b", 3: "a", 4: "b"}
console.log(obj1); // {1: "c", 2: "b", 3: "a", 4: "b"} (obj1 also changes)

/*
When you change obj4[1] = "c", you're modifying the same object that obj1 refers to, because obj4 is just a reference to obj1.
As a result, obj1 will also change, because both obj1 and obj4 point to the same object in memory.
*/


const obj5 = {1: "a", 2: "b"};
const obj6 = {3: "a", 4: "b"};

const obj7 = Object.assign({}, obj5, obj6);

console.log(obj7); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5); // { '1': 'a', '2': 'b' }
console.log(obj6); // { '3': 'a', '4': 'b' }

/*
Here, you're passing an empty object ({}) as the target. This creates a new object where the properties of obj5 and obj6 are copied into it.
Since the target is an empty object, the properties of obj5 and obj6 are merged into this new object (obj7).
obj5 and obj6 remain unchanged because the target is a new empty object, and the properties are copied into this new object, not into obj5 or obj6.
*/


const obj5 = {1: "a", 2: "b"};
const obj6 = {3: "a", 4: "b"};

const obj7 = Object.assign({}, obj5, obj6);

console.log(obj7); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5); // { '1': 'a', '2': 'b' }
console.log(obj6); // { '3': 'a', '4': 'b' }

// Modify obj7
obj7[1] = "z";

console.log(obj7); // { '1': 'z', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5); // { '1': 'a', '2': 'b' } (no change)
console.log(obj6); // { '3': 'a', '4': 'b' } (no change)

/*
When you create obj7 using Object.assign({}, obj5, obj6), you're making a new object that combines the properties of obj5 and obj6.
Changes to obj7 (like obj7[1] = "z") will only affect obj7, not obj5 or obj6, because they are separate objects.
obj5 and obj6 remain unchanged.
*/


/*
No, using {} as the target in Object.assign() does not create a deep copy, even if the object contains nested objects. It only performs a shallow copy, meaning that it copies the properties at the first level, but if there are nested objects, the references to those nested objects are copied, not the actual nested objects themselves.
*/

const obj1 = {
  a: 1,
  b: { x: 10, y: 20 },
};

const obj2 = Object.assign({}, obj1);

obj2.a = 2;          // Changes the primitive value of `a` in obj2
obj2.b.x = 30;       // Modifies the nested object `b` inside obj2

console.log(obj1);   // { a: 1, b: { x: 30, y: 20 } }
console.log(obj2);   // { a: 2, b: { x: 30, y: 20 } }

/*
obj1 has a nested object b.
When you use Object.assign({}, obj1), it performs a shallow copy:
The top-level properties (a and b) are copied.
However, the nested object b is not copied. Instead, its reference is copied.
As a result, modifying obj2.b.x also changes obj1.b.x because both obj1 and obj2 share the same reference to the nested object b.
*/


// The spread operator ... is used to "spread" or copy all properties from one object (or array) into a new object

const obj8={1:"a",2:"b"};
const obj9={3:"a",4:"b"};

const obj10 ={...obj8,...obj9};
console.log(obj10);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "am@google.com"
    },
    {
         id: 2,
        email: "an@google.com"
    },
    {
         id: 3,
        email: "as@google.com"
    }
    
]

console.log(users[0].email); //am@google.com
console.log(users[1].id); //2
console.log(users[2].id); //3
console.log(users[2].email); //as@google.com



/*
Destructuring is a clean and concise way to extract data from an object and assign it to variables.
You can rename properties during destructuring, or provide default values when necessary.
*/

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aman"
}

console.log(course.courseInstructor); //aman
console.log(course["price"]); //999


//Shorthand: If the variable name matches the property name, you don’t need to specify the key.
const { courseInstructor } = course;
console.log(courseInstructor); //aman


//Renaming: You can assign a different variable name using : when destructuring.
const { courseInstructor:inst } = course;
console.log(inst); //aman



