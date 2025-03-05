// tsc .\Generic.ts -w
// nodemon Generic.js
"\uD83D\uDCCC Assignment 1: Understanding Basic Generics\n1\uFE0F\u20E3 Write a function wrapValue<T> that takes a value of any type and returns it inside an object like this:\nconsole.log(wrapValue(123)); // { value: 123 }\nconsole.log(wrapValue(\"TS\")); // { value: \"TS\" }\n";
{
    // function wrapValue<T>(value:T):{value:T} {
    //     return {value }
    // }
    // console.log(wrapValue(123))
    // console.log(wrapValue("sahil shaikh"))
}
"\uD83D\uDCCC Next Challenge: wrapArray<T>\nNow that you've understood wrapValue<T>, let's apply the same logic to arrays!\n\n\uD83D\uDEE0 Your Task: 1\uFE0F\u20E3 Write a function wrapArray<T> that takes an array of any type and returns an object like this:\n\nconsole.log(wrapArray([1, 2, 3])); // { values: [1, 2, 3] }\nconsole.log(wrapArray([\"a\", \"b\", \"c\"])); // { values: [\"a\", \"b\", \"c\"] }\n\n\n2\uFE0F\u20E3 Make sure it works for any type of array (numbers, strings, objects, booleans, etc.)!";
{
    //   function wrapArray <T>(arr:T[]):{arr:Array<T>} {
    //     return {arr}
    // }
    // console.log(wrapArray(["ok","randi","nargis","chinal"]))
    // console.log(wrapArray([1,2,3,1,5,6,]))
    // console.log(wrapArray([true,false,true,true,true]))
    // console.log(wrapArray([{name:"ok",age:12},{name:"nargis",age:32}]))
}
"\uD83C\uDFAF Next Challenge: getFirst<T>\nNow that you've mastered wrapping an array, let's move to retrieving the first element.\n\n\uD83D\uDEE0 Your Task:\n1\uFE0F\u20E3 Write a generic function getFirst<T> that takes an array of any type and returns its first element.\n2\uFE0F\u20E3 Ensure TypeScript automatically infers the type of the first element.\n\nExample Output:\n\nconsole.log(getFirst([100, 200, 300])); // 100\nconsole.log(getFirst([\"apple\", \"banana\", \"cherry\"])); // \"apple\"\nconsole.log(getFirst([true, false, true])); // true\nconsole.log(getFirst([{ id: 1 }, { id: 2 }])); // { id: 1 }";
{
    // function getFirst<T>(arr:T[]):T{
    //   return arr[0]  
    // }
    // console.log(getFirst([{ id: 1 }, { id: 2 }]))
}
"\uD83D\uDEE0 Your Task:\n1\uFE0F\u20E3 Write a function reverseArray<T> that takes an array of any type and returns a new array with elements in reverse order.\n\n2\uFE0F\u20E3 It should work for any type of array (numbers, strings, objects, booleans, etc.).";
{
    // function reverseArray<T> (arr:T[]):T[]{
    //   return [...arr].reverse()
    // }
    // console.log(reverseArray([true,true,true,false]))
    // console.log(reverseArray([1,2,3,4,5,6,7,8,9]))
}
"\uD83D\uDCCC Next Challenge: mergeArrays<T>\nNow let's step up your generics game!\n\n\uD83D\uDEE0 Your Task:\n1\uFE0F\u20E3 Write a function mergeArrays<T> that takes two arrays of the same type and merges them into one.\n2\uFE0F\u20E3 It should work for any type of array (numbers, strings, objects, booleans, etc.).\n\n";
{
    // function mergeArray<T>(arr:T[],arr2:T[]):T[]{
    //   return [...arr,...arr2]
    // }
    // console.log(mergeArray([1,2,3,45,6],[2,3,5,6,5]))
}
"\uD83D\uDE80 Next Challenge: filterArray<T>\nNow let's level up with filtering arrays using generics!\n\n\uD83D\uDEE0 Your Task:\n1\uFE0F\u20E3 Write a function filterArray<T> that filters an array based on a condition.\n2\uFE0F\u20E3 It should accept an array and a callback function that decides whether to keep an element.\n3\uFE0F\u20E3 It should work for any type of array.\n\n\uD83D\uDD39 Example Output:\nts\nCopy\nEdit\nconsole.log(filterArray([1, 2, 3, 4, 5], (num) => num > 2));  \n// \u2705 Output: [3, 4, 5]\n\nconsole.log(filterArray([\"apple\", \"banana\", \"kiwi\"], (word) => word.length > 5));  \n// \u2705 Output: [\"banana\"]\n\nconsole.log(filterArray([true, false, true], (val) => val === true));  \n// \u2705 Output: [true, true]";
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
"\uD83D\uDE80 Next Challenge: findItem<T>\nNow let's step up the game with finding elements in an array using generics!\n\n\uD83D\uDEE0 Your Task:\n1\uFE0F\u20E3 Write a function findItem<T> that finds and returns the first element in an array that matches a condition.\n2\uFE0F\u20E3 It should accept an array and a callback function that decides which element to find.\n3\uFE0F\u20E3 It should return T | undefined because the item might not exist.\n\n\uD83D\uDD39 Example Output:\n\nconsole.log(findItem([10, 20, 30, 40], (num) => num > 25));  \n// \u2705 Output: 30\n\nconsole.log(findItem([\"cat\", \"dog\", \"elephant\"], (word) => word.length > 3));  \n// \u2705 Output: \"elephant\"\n\nconsole.log(findItem([true, false, true], (val) => val === false));  \n// \u2705 Output: false\n\nconsole.log(findItem([1, 2, 3], (num) => num > 10));  ";
{
    // function findItem<T>(arr:T[],callback:(item:T)=>boolean):T | undefined{
    //   return arr.find(callback)
    // }
    // console.log(findItem([99992,3,5,6],(num)=>num>4))
}
"\uD83D\uDE80 Next Challenge: mapArray<T>\nNow, let's move on to modifying elements in an array using generics!\n\n\uD83D\uDEE0 Your Task:\n1\uFE0F\u20E3 Write a function mapArray<T, U> that takes:\n\nAn array of type T[]\nA callback function that transforms each item into type U\n2\uFE0F\u20E3 It should return a new array of transformed values\n\uD83D\uDD39 Example Output:\n\nconsole.log(mapArray([1, 2, 3], (num) => num * 2));  \n// \u2705 Output: [2, 4, 6]\n\nconsole.log(mapArray([\"hello\", \"world\"], (word) => word.toUpperCase()));  \n// \u2705 Output: [\"HELLO\", \"WORLD\"]\n\nconsole.log(mapArray([true, false, true], (bool) => (bool ? \"Yes\" : \"No\")));  \n// \u2705 Output: [\"Yes\", \"No\", \"Yes\"]";
{
    //   function mapArray<T,U>(arr:T[],callback:(item:T)=>U):U[]{
    //     return arr.map(callback)
    //  }
    //  console.log(mapArray([4,5,6,7,8],(num=>num*9)))
}
"\uD83D\uDE80 Assignment: groupBy<T>\nNow that you've mastered map and filter, let's create something more powerful\u2014a function that groups items in an array by a key!\n\n\uD83D\uDEE0 Your Task:\n1\uFE0F\u20E3 Write a function groupBy<T, K> that:\n\nTakes an array of objects (T[])\nTakes a callback function (item: T) => K that extracts a grouping key\nReturns an object where items are grouped by the extracted key\n\uD83D\uDD39 Example Usage:\n\nconst users = [\n  { id: 1, name: \"Alice\", role: \"admin\" },\n  { id: 2, name: \"Bob\", role: \"user\" },\n  { id: 3, name: \"Charlie\", role: \"admin\" },\n  { id: 4, name: \"Dave\", role: \"user\" }\n];\n\nconsole.log(groupBy(users, (user) => user.role));\n/*\n\u2705 Expected Output:\n{\n  admin: [\n    { id: 1, name: \"Alice\", role: \"admin\" },\n    { id: 3, name: \"Charlie\", role: \"admin\" }\n  ],\n  user: [\n    { id: 2, name: \"Bob\", role: \"user\" },\n    { id: 4, name: \"Dave\", role: \"user\" }\n  ]\n}\n*/";
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
"\uD83D\uDD25 Next Assignment: Generic Constraints (extends)\n\u2705 Task 1: Object Constraint Lagao\nTuna ab tak \"kisi bhi type\" ke sath generics use kiya hai. Ab sirf objects allow karna seekh!\n\n\uD83D\uDEE0 Tera Kaam:\n\nEk function getObjectKeys<T> bana jo sirf objects accept kare (i.e., T extends object hona chahiye).\nYeh function us object ke keys ka array return karega.\n\uD83D\uDCCC Example Output:\n\n\nconsole.log(getObjectKeys({ name: \"Sahil\", age: 22 })); \n// Output: [\"name\", \"age\"]\n\uD83D\uDCA1 Hint: Object.keys() ka use kar!";
{
    function getObjectKeys(obj) {
        return Object.keys(obj);
    }
    console.log(getObjectKeys({ nargis: "name", ka: "ok", size: "hm", 40: "age", breast: "S", kaa: "o" }));
}
