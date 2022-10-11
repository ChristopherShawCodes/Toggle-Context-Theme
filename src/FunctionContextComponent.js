import React from 'react'
import {useTheme, useThemeUpdate} from './ThemeContext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
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
    <>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <p>Click the button to toggle the theme via Context using React</p>
    <div style={ThemeStyles}>Context Theme Toggle</div>
    </>
  )
}

