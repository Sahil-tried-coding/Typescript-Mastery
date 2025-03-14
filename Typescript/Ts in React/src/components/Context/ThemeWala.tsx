import React,{useContext} from 'react'
import { myContext } from './ThemeContext'

function ThemeWala() {

    const myTheme = useContext(myContext)



    
  return (
    <div>
{
  `this is the theme ${myTheme?.theme}`
}
<button onClick={()=>myTheme?.toggleFunc()}>CLikc me babes</button>
    </div>
  )
}

export default ThemeWala