"use strict";
"❤️❤️❤️❤️ Rules in typescript ❤️❤️❤️❤️";
"   : 👈  ye bas variable ka type define karne rehta ";
"   = 👈  ye variable ko value dene rehta ";
"   function ka type decalre karte time parameter me kabhi bhi = 👈sign nahi ata ";
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
function without compulsory parameters
type Functype = (a:number,b:number,l?:number) => number | string
const myFunction :  Functype = (a,b,l) =>{
    if(typeof l === "undefined" ) return "not required"
    return a+b+l
} 
console.log(myFunction(32,60)) 
functions with default parameters
const myFunction    = (a:number,b:number,l:number = 20) =>{
    return a+b+l
} 
console.log(myFunction(32,60)) 
Rest Operator with the function
type Functype = (...a:number[]) => number[]
const myFunction : Functype = (...a) => {
    return a
}
console.log(myFunction(1,2,3,4,5,6,4))
"✅ Objects with Function";
const lol = (product) => {
    return product;
};
const productOne = {
    name: "IPhone xs",
    stock: 23,
    price: 7999,
    age: 12
};
console.log(lol(productOne));
