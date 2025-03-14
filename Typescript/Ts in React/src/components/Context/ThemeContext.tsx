import React, {ReactNode, createContext, useState } from 'react'



  type myTypeContext = {
    theme:string,
    toggleTheme:()=>void
  }

  export const myContext = createContext<myTypeContext|null>(null)


  type mytheme = "Light" | "Dark"
  export const ThemeProvider = ({children}:{children:ReactNode}) =>{

    const [theme,setTheme] = useState<mytheme>('Light');

    const toggleTheme = () => setTheme(theme === 'Light' ? "Dark" : "Light")


    return (
      <myContext.Provider value={{theme,toggleTheme}}>

{children}
      </myContext.Provider>
    )
  }



