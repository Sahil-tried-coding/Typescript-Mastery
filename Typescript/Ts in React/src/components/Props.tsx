import React from 'react'
type User ={
  name:string,
  age:number,
  isStudent?:boolean
}

function Props({name,age,isStudent=true}:User) {





  return (
    <div>
      'this ia for the props'
      <hr/>
        {name} {age} "is student" {isStudent}
    </div>
  )
}

export default Props