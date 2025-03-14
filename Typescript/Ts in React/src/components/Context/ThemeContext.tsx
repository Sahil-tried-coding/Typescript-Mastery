// import React, {ReactNode, createContext, useState } from 'react'

import { createContext,ReactNode, useReducer, useState } from "react";
import { ReducerThemeFunc } from "../Reducers/Reducers";



//   type myTypeContext = {
//     theme:string,
//     toggleTheme:()=>void
//   }

//   export const myContext = createContext<myTypeContext|null>(null)


//   type mytheme = "Light" | "Dark"
//   export const ThemeProvider = ({children}:{children:ReactNode}) =>{

//     const [theme,setTheme] = useState<mytheme>('Light');

//     const toggleTheme = () => setTheme(theme === 'Light' ? "Dark" : "Light")


//     return (
//       <myContext.Provider value={{theme,toggleTheme}}>

// {children}
//       </myContext.Provider>
//     )
//   }



type typeofmyContext = {
  theme:string,
  toggleFunc:()=>void
}

type typeofChildren = {children:ReactNode}

export const myContext = createContext<typeofmyContext|null>(null)


export  const ThemeContext = ({children}:typeofChildren) =>{

//   const [theme, setTheme] = useState<string>('light')

//  const toggleFunc = () => setTheme(theme === "light" ? "dark" : "light")

const [state,dispatch] = useReducer(ReducerThemeFunc,{theme:"light"})

const toggleFunc = () => dispatch({type:"toggleAction"})
 return (
  <myContext.Provider value={{theme:state.theme,toggleFunc}}>

{children}
  </myContext.Provider>
 )
}
