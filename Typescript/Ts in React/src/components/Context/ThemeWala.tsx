import React,{useContext} from 'react'
import { myContext } from './ThemeContext'

function ThemeWala() {

    const myTheme = useContext(myContext)

    
  return (
    <div>
        <button onClick={myTheme?.toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeWala