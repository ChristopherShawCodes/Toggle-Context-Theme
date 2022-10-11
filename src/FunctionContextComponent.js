import React,{useContext} from 'react'
import {ThemeContext} from './App'

const FunctionContextComponent = () => {
    const darkTheme = useContext(ThemeContext)
    const ThemeStyles = {
        backgroundColor: darkTheme? '#333': '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: 10,
        height: 100,
        width: 100,
        margin: 25,
        marginLeft: 700
    }
  return (
    <div style={ThemeStyles}>FunctionTheme</div>
  )
}

export default FunctionContextComponent