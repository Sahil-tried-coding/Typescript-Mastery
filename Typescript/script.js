"❤️❤️❤️❤️ Rules in typescript ❤️❤️❤️❤️";
"   : 👈  ye bas variable ka type define karne rehta ";
"   = 👈  ye variable ko value dene rehta ";
"   function ka type decalre karte time parameter me kabhi bhi = 👈sign nahi ata ";
"   ❤️type❤️  use hota function ka type dene & ❤️interface❤️ use hota function me object accept karwane";
'✅array in typescript';
// const arr : number [] = [1,2,3,4,5,6]
// const arr :Array<number & string & boolean > = ["1",false,45,685,1]
// console.log(arr)
///////////////////////////////////////////
'✅objects in typescript';
// type Fuck = (n:number,m:number) => void
// interface maleObj {
//     name:string,
//     age:number,
//     gender?:boolean,
//     func:Fuck
// }
// interface femaleObj extends maleObj {
//     weight:number
// }
// const myObj2 : femaleObj = {
//     name:"xxx",
//     weight:45,
//     age:11,
//     gender:false,
//     func:(n,m)=>{
//         console.log("randi ji",n/m)
//     }
// }
// myObj2.func(80,2)
// /////////////////////////////////////////////
'✅functions in Typescript';
// function without compulsory parameters
// type Functype = (a:number,b:number,l?:number) => number | string
// const myFunction :  Functype = (a,b,l) =>{
//     if(typeof l === "undefined" ) return "not required"
//     return a+b+l
// } 
// console.log(myFunction(32,60)) 
// functions with default parameters
// const myFunction    = (a:number,b:number,l:number = 20) =>{
//     return a+b+l
// } 
// console.log(myFunction(32,60)) 
// Rest Operator with the function
// type Functype = (...a:number[]) => number[]
// const myFunction : Functype = (...a) => {
//     return a
// }
// console.log(myFunction(1,2,3,4,5,6,4))
"✅ Objects with Function";
// interface Product {
//     stock:number;
//     price:number;
//     name:string;
//     age:number
// }
// type Functype = (product : Product) => void
// const lol:Functype =  (product) => {
//     return product
// }
// const productOne : Product ={
//     name:"IPhone xs",
//     stock:23,
//     price:7999,
//     age:12
// }
// console.log(lol(productOne))
// "✅ Classes and Objects in typescript"
// class Student {
//         name:string
//         age:number
//         // consturctor is called when an object is created and it initialized value
//         constructor (name:string,age:number){
//                 this.name=name;
//                 this.age=age
//         }
//         // Method defines the behaviuor or actions
//         greet():string{
//                 return `the name is ${this.name} and the age is ${this.age}`
//         }
// }
// let std1 = new Student("sahil",42);
// std1.greet()
// {
//         `✅ 1. Classes & Object-Oriented Programming (OOP):
//          - Classes, constructors, methods, inheritance, aur access modifiers (public, private, protected).
//         ✅ 2. Generics:
//          - Generic functions, classes, interfaces, aur constraints ka istemal.
//         ✅ 3. Modules & Namespaces:
//          - ES Modules (import/export), module resolution, aur namespaces ka use.
//         ✅ 4. Enums & Type Aliases:
//          - Enums banane aur type aliases create karne ke tareeke.
//         ✅ 5. Advanced Types:
//          - Union, Intersection, type guards, conditional types, aur mapped types.
//         ✅ 6. Decorators:
//          - Class, method, property, aur parameter decorators ke concepts.
//         ✅ 7. Compiler Options & Configuration:
//          - tsconfig.json settings, strict mode, aur path mapping.
//         ✅ 8. Utility Types:
//          - Partial, Readonly, Record, Pick, Omit, etc. ka practical use.
//         ✅ 9. Error Handling & Debugging:
//          - Common error patterns, debugging techniques, aur effective error handling.`
// }
// {
//                 `🚀 Next Topics to Learn:
//         ✅ 1. Type Narrowing & Type Guards
//         typeof, instanceof, aur custom type guards ka use
//         Runtime pe types check karna
//         ✅ 2. Enums & Literal Types
//         Enum ka use kab aur kaise karein?
//         Literal types se strict validation kaise karein?
//         ✅ 3. Tuples & Readonly Types
//         Fixed-length arrays (Tuple)
//         readonly modifier ka use
//         ✅ 4. Type Assertion & Type Casting
//         as keyword ka use
//         <T> syntax vs as syntax
//         ✅ 5. Advanced Functions
//         Function Overloading
//         Rest parameters & Default parameters
//         ✅ 6. Generics (Most Important for Interviews & Real Projects!)
//         Generic Functions & Components
//         Constraints in Generics (extends keyword)
//         ✅ 7. Utility Types & Mapped Types
//         Partial<>, Required<>, Pick<>, Omit<>
//         Custom mapped types
//         ✅ 8. Decorators (Used in Angular & Backend Development)
//         Class Decorators
//         Method & Property Decorators`
// }
var form = document.getElementById("myform");
var myinput = document.querySelector("form > input");
var h2 = document.createElement("h2");
var body = document.querySelector("body");
form.onsubmit = function (e) {
    e.preventDefault();
    var value = Number(myinput.value);
    h2.textContent = String(value + 20);
    body.append(h2);
};
