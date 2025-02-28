// tsc .\TypeUtility.ts -w
// nodemon TypeUtility.js


// `✅Record Type`

// type Instagram = "feed" |"posts" | "likes"

// type instatype = Record<Instagram,number | string>

// const who_sahilshaikh:instatype = {
//     feed:32,
//     posts:12,
//     likes:555

// } 

// console.log(who_sahilshaikh)

// `✅Pick Type`

// interface mobileCompany {
//     vivo:string
//     iphone:string
//     samsgun:string
//     xiomi:string
// }


// type myPersonalMobile = Pick<mobileCompany,"vivo"|"iphone">


// const meraMobile:myPersonalMobile = {
//     iphone:"Xs",
//     vivo:"V25 por"
// }

// console.log(meraMobile.vivo)


// `Omit Type`


    // interface mobileCompany {
    //     vivo:string
    //     iphone:string
    //     samsgun:string
    //     xiomi:string
    // }


    // type myPersonalMobile = Omit<mobileCompany,"vivo"|"iphone">


    // const meraMobile:myPersonalMobile = {
    //     samsgun:"s25 ultra",
    //     xiomi:"mi book"
    // }

    // console.log(meraMobile.xiomi)


    `
    🏆 Beginner Level
1️⃣ Basic User Update

Create a User type with id, name, and email.
Define an editable version of User where all properties are optional.
Write a function updateUser(user: User, updates: Partial<User>) that merges updates into the original user.
    `
    {
    //     type User = {
    //         id:number,
    //         name:string,
    //         email:string
    //     }
    
    //     type optionalUser = Partial<User>
    
    //     const updateUser = (user:User,updates:optionalUser) =>{
    
    //          updates.name =  user.name 
    //          updates.id =  user.id 
    //          updates.email =  user.email 
    
    //          return console.log(user)
             
    //     }
    
    //    updateUser({name:"sahil",id:55,email:"randiji@gmail"},{name:"harshada",id:1435,email:"@gmail"})
    }



`
2️⃣ Read-Only Products

Create a Product type with id, name, and price.
Define a ReadonlyProduct using Readonly<T>.
Try modifying a property of ReadonlyProduct and handle the TypeScript error.
`


{
    //  type Product = {
    //     id:112,
    //     name:"Iphone",
    //     price:45000
    // }


    // type readonlyProduct = Readonly<Product>

    // const myProduct:readonlyProduct = {
        
    // } 
}


`3️⃣ Pick & Omit Challenge

Create a Car type with brand, model, year, and price.
Use Pick<T, K> to create CarSummary that includes only brand and model.
Use Omit<T, K> to create CarWithoutPrice (excluding price).
Write a function that accepts CarSummary as a parameter.`


{
    
    // type Car = {
    //     brand:string,
    //     model:string,
    //     price:number
    // }

    // type carSummary = Pick<Car,"brand"|"model">
    // type carWithoutPrice = Omit<Car,"price">

    // const getCar = (carInfo:carSummary) =>{

    //     return carInfo
    // }

    // console.log(getCar({brand:"Tesla",model:"Xii"}))
}



`🏅 Intermediate Level
4️⃣ Permissions System

Define a Role type with "admin" | "user" | "guest".
Use Record<K, T> to create a Permissions object where each role is assigned a boolean.
Create a function hasAccess(role: Role, permissions: Permissions) that returns whether the role has access.`


{
    // type Role = "admin" | "user" | "guest"

    // type  Permissions =Record<Role,boolean> 

    // const permission = {
    //     admin:true,
    //     guest:false,
    //     user:true
    // }
    // const hasAccess = (role:Role,permission:Permissions) => {
    //      return console.log(permission[role])
    // }

    // hasAccess("guest",permission)
}


`5️⃣ Filter Unwanted Values

Define a union type NotificationStatus = "success" | "error" | "loading".
Use Exclude<T, U> to create FinalStatus, removing "loading".
Use Extract<T, U> to create CriticalStatus, keeping only "error".
Write a function that accepts only CriticalStatus values.`


{

    // type NotificationStatus = "success"|"error"|"loading"
    
    // type FinalStatus = Exclude<NotificationStatus,"loading">
    
    // type CriticalStatus = Extract <NotificationStatus,"error">

    // const getStatus = (status:CriticalStatus):string =>{
    //     return `this is the error you got ${status}`
    // }


    // console.log(getStatus("error"))
}



`6️⃣ Strict Form Submission

Create a FormValues type with name, email, and age (optional).
Convert it to Required<FormValues>, making all fields mandatory.
Write a function submitForm(form: Required<FormValues>).
`

{
    // type FormValues = {
    //     name:string,
    //     email:string,
    //     age?:number
    // }

    // type RequiredForm = Required<FormValues>

    // const submit = (form:RequiredForm):void =>{

    //     return console.log(`the name is ${form.name} email is ${form.email} and the age is ${form.age}`)
    // }
    // submit({name:"Sahil",age:22,email:"sahil@gmail.com"})
}


`🎖 Advanced Level
7️⃣ Dynamic Config System

Create a Config type with theme: "light" | "dark", language: "en" | "fr", and showSidebar: boolean.
Create a PartialConfig where all properties are optional.
Write a function updateConfig(defaultConfig: Config, newConfig: PartialConfig) that applies updates while keeping defaults.`


{
//     type Config = {
//         theme:"light"|"dark",
//         language:"en"|"fr",
//         showSidebar:boolean
//     }

//     type PartialConfig = Partial<Config>


//     const updateConfig = (defaultConfig:Config,newConfig:PartialConfig) =>{

//         return {...defaultConfig,...newConfig}

//     }

//    console.log(updateConfig({theme:"dark",language:"fr",showSidebar:false},{theme:"light"})) 
}

// `
// skipped 8 idk generic you also keep in mind
// `

`9️⃣ Deep Utility Type Combination

Define a Post type with id, title, content, and author.
Create ReadonlyPost using Readonly<T>.
Create PublicPost using Omit<Post, "author">.
Combine ReadonlyPost and PublicPost using &.`


{
    type Post ={
        id:number,
        title:string,
        content:string,
        author:string
    }

    type ReadOnlyPost = Readonly<Post>

    type PublicPost = Omit<Post,"author">


    type Instagram = ReadOnlyPost & PublicPost


    const mySocialMedia:Instagram = {

       id:69,
       title:"fucked up",
       content:"Excellent",
       author:"brp"
    }

    console.log(mySocialMedia)
}


`
🔟 Function Return Type Extraction

Write a function getUserInfo(): { id: number; name: string; email: string }.
Extract its return type using ReturnType<typeof getUserInfo>.
Create a function printUserInfo(user: ReturnType<typeof getUserInfo>).`

// const getUserInfo = (id:number,name:string,email:string) =>{}


// type getReturnType = ReturnType<typeof  getUserInfo>

// const printUserInfo = (user:getReturnType) =>{
// return `the info of user ${user}`
// }


// console.log(printUserInfo(id:12,name:"salu",email:"randigi@gmail.com"))