// ⬇️this is for the normal number in usestate wala

// import React, { useState } from 'react'

// function UseState() {


//     const [counter, setCounter] = useState<number>(0)
//   return (
//     <div>
//         "this is for the useState"
//         <hr/>
//         {counter}

// <button onClick={()=>setCounter(counter+1)}>+</button>

//     </div>
//   )
// }

// export default UseState




//⬇️✅ this is for the type integration wala
// import React, { useState } from 'react'

// type Student ={
//   name:string,
//   subjects:string[],
//   isPass?:boolean
// }
// function UseState() {


//   const [student, setStudent] = useState<Student|null>(null)
//   return (
//     <div>
//       {student ? <div>
//         <h1>name of student : {student.name}</h1>
//         <h1>name of subjects : {student.subjects}</h1>
//         <h1>student is pass : {student.isPass}</h1>
        
//       </div>:""}
//       <button onClick={(e:React.MouseEvent<HTMLButtonElement>)=>setStudent({name:"sallu",subjects:['cn ','cc ','dbms  '],isPass:true})}>Click me bhai</button>
//     </div>
//   )
// }

// export default UseState

import React, { useState } from 'react'

function UseState() {
  const [fruitsArray, setFruitsArray] = useState<string[]>([])
  setFruitsArray([...fruitsArray,"mango"])
  return (
    <div>

<h1>{fruitsArray[0]}</h1>
    </div>
  )
}

export default UseState