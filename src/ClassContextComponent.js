import { autocompleteClasses } from '@mui/material'
import React,{Component} from 'react'
import {ThemeContext} from './App'
import './App.css'

export default class ClassContextComponent extends Component{
    ThemeStyles(dark) {
        return{
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: 10,
            height: 100,
            width: 100,
            margin: 25,
            marginLeft: 700
        }
    }

render() {
    return (
        <ThemeContext.Consumer>
            {darkTheme => {
                return <div style={this.ThemeStyles(darkTheme)}>Class Theme</div>
            }}
        </ThemeContext.Consumer>
    )
  }
}