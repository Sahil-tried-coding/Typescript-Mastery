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
"\n    \uD83C\uDFC6 Beginner Level\n1\uFE0F\u20E3 Basic User Update\n\nCreate a User type with id, name, and email.\nDefine an editable version of User where all properties are optional.\nWrite a function updateUser(user: User, updates: Partial<User>) that merges updates into the original user.\n    ";
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
"\n2\uFE0F\u20E3 Read-Only Products\n\nCreate a Product type with id, name, and price.\nDefine a ReadonlyProduct using Readonly<T>.\nTry modifying a property of ReadonlyProduct and handle the TypeScript error.\n";
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
"3\uFE0F\u20E3 Pick & Omit Challenge\n\nCreate a Car type with brand, model, year, and price.\nUse Pick<T, K> to create CarSummary that includes only brand and model.\nUse Omit<T, K> to create CarWithoutPrice (excluding price).\nWrite a function that accepts CarSummary as a parameter.";
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
"\uD83C\uDFC5 Intermediate Level\n4\uFE0F\u20E3 Permissions System\n\nDefine a Role type with \"admin\" | \"user\" | \"guest\".\nUse Record<K, T> to create a Permissions object where each role is assigned a boolean.\nCreate a function hasAccess(role: Role, permissions: Permissions) that returns whether the role has access.";
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
"5\uFE0F\u20E3 Filter Unwanted Values\n\nDefine a union type NotificationStatus = \"success\" | \"error\" | \"loading\".\nUse Exclude<T, U> to create FinalStatus, removing \"loading\".\nUse Extract<T, U> to create CriticalStatus, keeping only \"error\".\nWrite a function that accepts only CriticalStatus values.";
{
    // type NotificationStatus = "success"|"error"|"loading"
    // type FinalStatus = Exclude<NotificationStatus,"loading">
    // type CriticalStatus = Extract <NotificationStatus,"error">
    // const getStatus = (status:CriticalStatus):string =>{
    //     return `this is the error you got ${status}`
    // }
    // console.log(getStatus("error"))
}
"6\uFE0F\u20E3 Strict Form Submission\n\nCreate a FormValues type with name, email, and age (optional).\nConvert it to Required<FormValues>, making all fields mandatory.\nWrite a function submitForm(form: Required<FormValues>).\n";
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
"\uD83C\uDF96 Advanced Level\n7\uFE0F\u20E3 Dynamic Config System\n\nCreate a Config type with theme: \"light\" | \"dark\", language: \"en\" | \"fr\", and showSidebar: boolean.\nCreate a PartialConfig where all properties are optional.\nWrite a function updateConfig(defaultConfig: Config, newConfig: PartialConfig) that applies updates while keeping defaults.";
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
"9\uFE0F\u20E3 Deep Utility Type Combination\n\nDefine a Post type with id, title, content, and author.\nCreate ReadonlyPost using Readonly<T>.\nCreate PublicPost using Omit<Post, \"author\">.\nCombine ReadonlyPost and PublicPost using &.";
{
    var mySocialMedia = {
        id: 69,
        title: "fucked up",
        content: "Excellent",
        author: "brp"
    };
    console.log(mySocialMedia);
}
"\n\uD83D\uDD1F Function Return Type Extraction\n\nWrite a function getUserInfo(): { id: number; name: string; email: string }.\nExtract its return type using ReturnType<typeof getUserInfo>.\nCreate a function printUserInfo(user: ReturnType<typeof getUserInfo>).";
