
"✅✅ assignmetn 1"

{
        // let naav:string = "Sahil"
        

        // let age : number = 21

        // let skills:Array<string> = ["typescript,react,node,express"]

        // let user :[string,number] = ["sallu",786]

        // enum universe {

        //     galaxy="milky way",
        //     no=2
        // }

        // console.log(naav)
        // console.log(age)
        // console.log(skills[0])
        // console.log(user)
        // console.log(universe.galaxy)

}



"✅ assignment 2"

{
        // Ek function banao jo 2 numbers ka difference return kare.
// Ek function banao jo optional parameter accept kare (Jaise greet function).
// Ek function likho jo ek array ka sum return kare.


        // const diffNumb = (a:number,b:number) : string  =>{
        //     let c:number = a-b;
        //     return (`the difference between ${a} and ${b} is ${c}` )
        // }

        // console.log(diffNumb(10,8))



        // type FuncType = (age:number,name:string,gender?:boolean) => void

        // const greet :FuncType = (age,name,gender) =>{

        //     if( typeof gender !== "undefined") return (`hello my name is ${name} my age is ${age} and my gender is ${gender}`)
        // else
        //     return (`hello my name is ${name} my age is ${age} ✅`)
        // }
        // console.log(greet(21,"sahil",false))



        
        // type Funtype = (arr:Array<number>) => number
        
        // const addArray:Funtype = (arr:number[]) =>{

        //         var total:number =0;

        //         arr.forEach((a)=>{
        //                 total += a
        //         })

        //         return total
        // }

        // console.log(addArray([1,2,3,4,60]))



        // const addArray = (number:number[]):number =>{

        //         let sum :number =0

        //         for(let num of number){
        //                 sum+=num
        //         }

        //         return sum
        // }
        // console.log(addArray([1,100,200]))

}



"✅ assignment 3"

// Ek interface banao jisme ek Car ka brand, model, aur year ho.
// Ek function likho jo Car object ka info print kare.
// Ek Student interface banao jisme multiple students ka data store ho.
{
        // interface Car  {
        //         brand:string;
        //         model:string;
        //         year:number
        // }
        
        // const carObj ={
                
                //         brand:"tata",
                //         model:"nexon",
                //         year : 2003
                // }
                
                // const Tata = (info:Car):void =>{
                        
                //         return console.log(`the car brand is ${info.brand} model is ${info.model} and year is ${info.year}`)
                // }
                
                // Tata(carObj)






                
// Ek Student interface banao jisme multiple students ka data store ho.
// `1️⃣ Ek aur property add kar (Jaise: grade: string) aur function update kar.
// 2️⃣ Ek function likh jo sirf 18+ students ka data print kare.
// 3️⃣ Ek function likh jo ek naya student array me add kare.`

                // interface Student {
                //         name:string;
                //         age:number;
                //         isPassed :boolean;
                //         grade:string

                // }

                // const student :Student[] = [
                //         {name:"sahil",age:17,isPassed:true,grade:"O"},
                //         {name:"pranjal",age:20,isPassed:true,grade:"O"},
                //         {name:"harshada",age:22,isPassed:true,grade:"O"},
                // ] 

                // const addStudent = (newStudent:Student){
                //         student.push(newStudent)
                //         console.log(` the new admission is here ${newStudent.name}`)
                // }

                // const studInfo = (student:Student[])=>{
                //         student.forEach((std)=>{
                //                 if(std.age>=18)
                //                 console.log(`name of student is ${std.name} age is ${std.age} and he is passed? ${std.isPassed}`)
                //         })
                // }

                // // studInfo(student)

                // addStudent({ name: "Ayanur", age: 5,isPassed:false,grade:"A+" })
}

`✅ 1. Functions & Type Annotations

🔹 Task:
Ek function likh jo 2 numbers ka sum return kare.
Agar koi number pass nahi hota, to default value 0 honi chahiye.`

{
        const addTwoNumb = (x:number = 0,y:number=0) :number =>{

                return x+y
        }
        
        console.log(addTwoNumb(12,88))
}

`
✅ 2. Arrays & Interfaces

🔹 Task:
Ek Student interface define karna.
Ek students array create karna jo multiple students ka data store kare.
Ek function likhna jo 18+ students ko filter karke return kare`

{
        // interface Student {
        //         age:number;
        //         name:string;
        //         grade?:string;
        //         rollNumber:number
        // }


        // const students:Student[] = [
        //         {name:"sahil",age:21,rollNumber:69},
        //         {name:"mayur",age:22,rollNumber:169},
        //         {name:"arman",age:23,rollNumber:269},
        //         {name:"aynoor",age:4,rollNumber:999},
        // ]


        // const myStudents = (randiji:Student[]) =>{

        //         randiji.forEach((std)=>{
        //                 if(std.age>18)
        //                         console.log(`name of student is ${std.name} age is ${std.age} roll number is ${std.rollNumber}`)
        //         })
        // }


        // myStudents(students)
}


`✅ 3. Adding & Removing Data in Arrays
🔹 Task:

Ek function likho jo naya student students array me add kare.
Ek function likho jo kisi student ko rollNumber ke basis pe delete kare.
Ek function likho jo kisi student ka course update kare.
`
{



                // interface Student {
                //                 age:number;
                //                 name:string;
                //                 grade?:string;
                //                 rollNumber:number;
                //                 course:string
                //         } 


                //         let students:Student[] = [
                //                 {name:"sahil",age:21,rollNumber:69,course:"cse"},
                //                 {name:"mayur",age:22,rollNumber:169,course:"cse"},
                //                 {name:"arman",age:23,rollNumber:269,course:"cse"},
                //                 {name:"aynoor",age:41,rollNumber:999,course:"cse"},
                //         ]


                //         const addNewStudent = (newone:Student) =>{

                //                 students.push(newone)
                //                 console.log(`new one is here ${newone.name}`)
                //         }


                //         const deleteById = (rollNumber:number) =>{

                //                 students = students.filter(std => std.rollNumber !== rollNumber)
                //                 // student = student me filter laga ki std ka rollnumber equal nahi hai roll number ke
                //                 console.log("the deleted student is " , rollNumber)

                //         }

                //         const updateCourse = (rollNumber:number,course:string) =>{

                //                 students.forEach((std)=>{
                //                         if(std.rollNumber === rollNumber)
                //                                 std.course = course
                //                 })
                                
                //         }

                //         const myStudents = (randiji:Student[]) =>{

                //                 randiji.forEach((std)=>{
                //                         if(std.age>18)
                //                                 console.log(`name of student is ${std.name} age is ${std.age} roll number is ${std.rollNumber} and cousre : ${std.course}`)
                //                 })
                //         }

                //         // updateCourse(69,"ai/ml/ai")

                //         // 2️⃣ Ek function likho jo sirf CS course wale students return kare.



                //         const getStdOnCourse = (course:string) =>{
                //              return students = students.filter(std=> std.course === course)
                //         }
                //         console.log(getStdOnCourse("ai"))
        // myStudents(students)




                // interface Product {

                //         id:number,
                //         name:string,
                //         price:number,
                //         category:string,
                //         stock:number
                // }



                // const products : Array <Product> = [
                //         {id:69,name:"Iphone",price:70000,stock:69,category:"mobile"  },
                //         {id:69,name:"tata",price:170000,stock:750,category:"car"  }
                // ] 


                // const updateOrAdd = (data:Product) =>{


                //         products.forEach((prd)=>{

                //                 if(prd.id === data.id){
                //                         prd = data
                //                         console.log("this product is already present in card ", data)
                //                 }
                //                 else{
                //                         products.push({...prd,data})
                //                         console.log("prodect added to the cart",data)
                //                 }
                //         })

                // }

                // const allProducts = () =>{

                //         products.forEach((prd)=>{
                //                 console.log(prd)
                //         })
                // }


                // allProducts()
}






"✅ Classes and Objects in typescript  "

{
        // class Dadabhai {

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
}


'✅ Inheritance in typescript'

{
                // class Sahil extends Dadabhai {
        //         acers:number

        //         constructor(name:string,age:number,acers:number){
        //                 // this.name=name;
        //                 // this.age=age
        //                 super(name,age) 
        //                 this.acers = acers
        //         }

        //         displayInfo():string{
        //                 return `${this.greet()} i have ${this.acers} acers`
        //         }
        // }

        // const sahil = new Sahil("Sahil",21,12)

        // console.log(sahil.displayInfo())
}

'✅ Access Modifiers in typescript'

{
//         `
// 1️⃣ Public - it is by default public which can be accessible from anywhere
// 2️⃣ Private - it can be only accessible from the same class and not from others
// 3️⃣ Protected - it can be accessed from the sub class of it only
// `


// class Teacher {
//         public name:string;
//         private contact:number;
//         public grade : string


//         constructor (name:string,contact:number,grade:string){
//                 this.name=name
//                 this.contact=contact
//                 this.grade=grade
//         }

//         getContact ():string{
//                 return `${this.contact}`
//         }
// }

// class Student extends Teacher {
//         public schoolName:string

//         constructor(name:string,contact:number,grade:string,schoolName:string){

//                 super(name,contact,grade)
//                 this.schoolName = schoolName
//         }

//         getInfo ():string{
//                 return `the name is ${this.name} heres the confidential conact ${this.getContact()} grade is ${this.grade} finnaly the school name is ${this.schoolName}`
//         }
// }

// const std = new Student("aynnor",797248330,"A+","SSGM")

// console.log(std.getInfo()) 
}



"✅ Polymorphism in typescript  (ek naam alag alag kaam)"


' this is method Overriding '

{
        
                // class Animal {

                //         makeSound():void {
                //                 console.log("no noise")
                //         }
                // }

                // class Dog extends Animal{

                //         makeSound(): void {
                //         console.log("Bhau Bhau Bhau")
                //         }
                // }

                // class Cat extends Animal{
                //         makeSound(): void {
                //         console.log("meow meow meow")
                //         }
                // } 




                // const bhaiji = new Cat()
                // const bhai = new Dog()

                // bhaiji.makeSound()
                // bhai.makeSound()
}


'this is method overloading '

{

        // class Calculator {
        //         add(a:number,b:number):number
        //         add(a:string,b:string):string
        //         add(a:any,b:any):any{
        //                 return console.log(a+b)
        //         }
        // }

        // const calc = new Calculator()
        // calc.add(561,44)
        // calc.add("56","44")

}

'ploymorphims with interface'

{
        // interface Payment {

        //         makePayment(amount:number):void
        // }

        // class GooglePay implements Payment{

        //         makePayment(amount: number): void {
        //             return console.log(`the amount : ${amount} is aviable`)
        //         }
        // }
        // class Phonepe  implements Payment{
        //         makePayment(amount: number): void {
        //             return console.log(`the amount is ${amount} is there`)
        //         }
        // }

        // const gpay = new GooglePay() 
        // const pp = new Phonepe()

        // gpay.makePayment(50000)
        // pp.makePayment(13000)
}
`🔥 Challenge Task
Mujhe polymorphism ka ek example likh ke dikhaiye jisme:

Ek parent class Employee ho jisme ek calculateSalary() method ho.
Developer aur Manager class us method ko override kare aur apna salary logic define kare.
displaySalary() function likho jo calculateSalary() call kare.
👀 Try karo, aur agar dikkat ho to batao! 💪`

{
        // class Employee {
        //         calculatedSalary (salary:number):void{}
        // }

        // class Manager extends Employee{

        //         calculatedSalary(salary:number) :void {
        //             return console.log(`the salary of manager is ${salary}`)
        //         }
        // }

        // class Developer extends Employee {
        //         calculatedSalary(salary:number) : void {
        //             return console.log(`the salary of dev is ${salary}`)
        //         }
        // }

        // const dev = new Developer() 
        // const man = new Manager() 

        // dev.calculatedSalary(12000)
        // man.calculatedSalary(922000)
}


// `✅Type Assertion in typescript`

`
📝 Task 1: Convert Unknown to String
Tumhare paas ek variable hai data, jiska type unknown hai. Tumhe Type Assertion use karke usko string me convert karna hai aur length nikalni hai.`

{
        // let data :unknown = "SAhil bhaiya shaikh"

        // let strlength:number = (data as string).length 
        // console.log(strlength)
}

`
📝 Task 3: Convert Any to Number
Tumhare paas ek variable hai jisme any type ka data hai. Tumhe usko number me convert karna hai aur usko console.log karna hai.
`
{
        // const runs:any = 123;

        // const totalRuns:number = Number(runs)
        // console.log(totalRuns)
}


`📝 Task 4: Convert Object to Interface
Ek employee object hai, jo unknown type ka hai. Tumhe Type Assertion ka use karke usko ek proper Employee type me convert karna hai.`

{

        // type Employee = {
        //         name:string,
        //         id:number,
        //         age:number
        // }


        // let employeeData:unknown = {
        //         name:"sahil",
        //         age:21,
        //         id:555
        // }


        // let employee:Employee = (employeeData as Employee)

        // console.log(typeof employee,employee.age,employee.name,employee
        //         .id
        // )


}


// `
// ✅Utility types in typescript 
// `

`partital Type`
{

        // interface User {
        //         name:string,
        //         age:number
        // }
        
        // type newUser = Partial<User>

        // const myuser:newUser = {
        //         name:"sahil",
        //         age:24
        // }
        // console.log(myuser)
}
`Required Type`
{

        // interface User {
        //         name:string,
        //         age:number
        // }
        
        // type newUser = Required<User>

        // const myuser:newUser = {
        //         name:"sahil",
        //         age:24
        // }
        // console.log(myuser)
}
`Readonly Type`
{

        interface User {
               readonly name:string,
                age:number
        }
        
        // type newUser:User

        const myuser:User = {
                name:"sahil",
                age:24
        }
        console.log(myuser.age=22)
}