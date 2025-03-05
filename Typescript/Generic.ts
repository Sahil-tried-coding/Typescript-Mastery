// tsc .\Generic.ts -w
// nodemon Generic.js


`📌 Assignment 1: Understanding Basic Generics
1️⃣ Write a function wrapValue<T> that takes a value of any type and returns it inside an object like this:
console.log(wrapValue(123)); // { value: 123 }
console.log(wrapValue("TS")); // { value: "TS" }
`

   {
     // function wrapValue<T>(value:T):{value:T} {

    //     return {value }
    // }
    // console.log(wrapValue(123))
    // console.log(wrapValue("sahil shaikh"))
   }


`📌 Next Challenge: wrapArray<T>
Now that you've understood wrapValue<T>, let's apply the same logic to arrays!

🛠 Your Task: 1️⃣ Write a function wrapArray<T> that takes an array of any type and returns an object like this:

console.log(wrapArray([1, 2, 3])); // { values: [1, 2, 3] }
console.log(wrapArray(["a", "b", "c"])); // { values: ["a", "b", "c"] }


2️⃣ Make sure it works for any type of array (numbers, strings, objects, booleans, etc.)!`

{
    //   function wrapArray <T>(arr:T[]):{arr:Array<T>} {

    //     return {arr}
    // }


    // console.log(wrapArray(["ok","randi","nargis","chinal"]))
    // console.log(wrapArray([1,2,3,1,5,6,]))
    // console.log(wrapArray([true,false,true,true,true]))
    // console.log(wrapArray([{name:"ok",age:12},{name:"nargis",age:32}]))

}



`🎯 Next Challenge: getFirst<T>
Now that you've mastered wrapping an array, let's move to retrieving the first element.

🛠 Your Task:
1️⃣ Write a generic function getFirst<T> that takes an array of any type and returns its first element.
2️⃣ Ensure TypeScript automatically infers the type of the first element.

Example Output:

console.log(getFirst([100, 200, 300])); // 100
console.log(getFirst(["apple", "banana", "cherry"])); // "apple"
console.log(getFirst([true, false, true])); // true
console.log(getFirst([{ id: 1 }, { id: 2 }])); // { id: 1 }`

{
  // function getFirst<T>(arr:T[]):T{

  //   return arr[0]  
  // }

  // console.log(getFirst([{ id: 1 }, { id: 2 }]))
}



`🛠 Your Task:
1️⃣ Write a function reverseArray<T> that takes an array of any type and returns a new array with elements in reverse order.

2️⃣ It should work for any type of array (numbers, strings, objects, booleans, etc.).`

{

  // function reverseArray<T> (arr:T[]):T[]{

  //   return [...arr].reverse()
  // }

  // console.log(reverseArray([true,true,true,false]))
  // console.log(reverseArray([1,2,3,4,5,6,7,8,9]))
}


`📌 Next Challenge: mergeArrays<T>
Now let's step up your generics game!

🛠 Your Task:
1️⃣ Write a function mergeArrays<T> that takes two arrays of the same type and merges them into one.
2️⃣ It should work for any type of array (numbers, strings, objects, booleans, etc.).

`

{

  // function mergeArray<T>(arr:T[],arr2:T[]):T[]{
  //   return [...arr,...arr2]
  // }

  // console.log(mergeArray([1,2,3,45,6],[2,3,5,6,5]))
}


`🚀 Next Challenge: filterArray<T>
Now let's level up with filtering arrays using generics!

🛠 Your Task:
1️⃣ Write a function filterArray<T> that filters an array based on a condition.
2️⃣ It should accept an array and a callback function that decides whether to keep an element.
3️⃣ It should work for any type of array.

🔹 Example Output:
ts
Copy
Edit
console.log(filterArray([1, 2, 3, 4, 5], (num) => num > 2));  
// ✅ Output: [3, 4, 5]

console.log(filterArray(["apple", "banana", "kiwi"], (word) => word.length > 5));  
// ✅ Output: ["banana"]

console.log(filterArray([true, false, true], (val) => val === true));  
// ✅ Output: [true, true]`


// 1 parameter me 2 chize hai (array,callback func)
// 2 parameter me ka function jo hai uska return type boolean hai
// 3 main function ka return type array hai
// 4 filter method me call back ka value do

{

  // function filterArray<T>(arr:T[],callback:(item:T) => boolean):T[]{
  //   return arr.filter(callback)
  // }


  // console.log(filterArray([1,2,3,5,6,8],(num)=>num<2))


}


`🚀 Next Challenge: findItem<T>
Now let's step up the game with finding elements in an array using generics!

🛠 Your Task:
1️⃣ Write a function findItem<T> that finds and returns the first element in an array that matches a condition.
2️⃣ It should accept an array and a callback function that decides which element to find.
3️⃣ It should return T | undefined because the item might not exist.

🔹 Example Output:

console.log(findItem([10, 20, 30, 40], (num) => num > 25));  
// ✅ Output: 30

console.log(findItem(["cat", "dog", "elephant"], (word) => word.length > 3));  
// ✅ Output: "elephant"

console.log(findItem([true, false, true], (val) => val === false));  
// ✅ Output: false

console.log(findItem([1, 2, 3], (num) => num > 10));  `


{


  // function findItem<T>(arr:T[],callback:(item:T)=>boolean):T | undefined{

  //   return arr.find(callback)
    
  // }
  // console.log(findItem([99992,3,5,6],(num)=>num>4))
}


`🚀 Next Challenge: mapArray<T>
Now, let's move on to modifying elements in an array using generics!

🛠 Your Task:
1️⃣ Write a function mapArray<T, U> that takes:

An array of type T[]
A callback function that transforms each item into type U
2️⃣ It should return a new array of transformed values
🔹 Example Output:

console.log(mapArray([1, 2, 3], (num) => num * 2));  
// ✅ Output: [2, 4, 6]

console.log(mapArray(["hello", "world"], (word) => word.toUpperCase()));  
// ✅ Output: ["HELLO", "WORLD"]

console.log(mapArray([true, false, true], (bool) => (bool ? "Yes" : "No")));  
// ✅ Output: ["Yes", "No", "Yes"]`


{
//   function mapArray<T,U>(arr:T[],callback:(item:T)=>U):U[]{

//     return arr.map(callback)
//  }
 
//  console.log(mapArray([4,5,6,7,8],(num=>num*9)))
}



`🚀 Assignment: groupBy<T>
Now that you've mastered map and filter, let's create something more powerful—a function that groups items in an array by a key!

🛠 Your Task:
1️⃣ Write a function groupBy<T, K> that:

Takes an array of objects (T[])
Takes a callback function (item: T) => K that extracts a grouping key
Returns an object where items are grouped by the extracted key
🔹 Example Usage:

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "Dave", role: "user" }
];

console.log(groupBy(users, (user) => user.role));
/*
✅ Expected Output:
{
  admin: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 3, name: "Charlie", role: "admin" }
  ],
  user: [
    { id: 2, name: "Bob", role: "user" },
    { id: 4, name: "Dave", role: "user" }
  ]
}
*/`



{
  // function groupBy<T,K extends string | number>(arrObj:T[],callback:(item:T)=>K):Record<K,T[]>{

  //   return arrObj.reduce((acc,item)=>{
  //     const key = callback(item);

  //     if (!acc[key]){
  //       acc[key] = []
  //     }

  //     acc[key].push(item)

  //     return acc
  //   },{} as Record<K,T[]> )
   
  // }
}

`🔥 Next Assignment: Generic Constraints (extends)
✅ Task 1: Object Constraint Lagao
Tuna ab tak "kisi bhi type" ke sath generics use kiya hai. Ab sirf objects allow karna seekh!

🛠 Tera Kaam:

Ek function getObjectKeys<T> bana jo sirf objects accept kare (i.e., T extends object hona chahiye).
Yeh function us object ke keys ka array return karega.
📌 Example Output:


console.log(getObjectKeys({ name: "Sahil", age: 22 })); 
// Output: ["name", "age"]
💡 Hint: Object.keys() ka use kar!`

{
  // function getObjectKeys<T extends object>(obj:T){

  //   return Object.keys(obj)
  // }


  // console.log(getObjectKeys({nargis:"name",ka:"ok",size:"hm",40:"age",breast:"S",kaa:"o"}))
}


`🔥 Next Task (Thoda Difficult)
✅ Task 2: Get Object Value
Ab keys ke sath values bhi chahiye!

🛠 Tera Kaam:

Ek function getObjectEntries<T> bana jo object ke keys + values ka array return kare.
Return type should be [key, value][] (array of tuples).
📌 Example Output:

console.log(getObjectEntries({ name: "Sahil", age: 22 }));
// Output: [["name", "Sahil"], ["age", 22]]
💡 Hint: Object.entries() ka use kar! 🚀

`

{
  function getObjectEntires<T extends object > (obj:T):T {

    return {obj}
  }
}