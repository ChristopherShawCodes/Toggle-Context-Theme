import React from 'react';
import './App.css';
import FunctionContextComponent from './FunctionContextComponent'
import {ThemeProvider} from './ThemeContext'

//ThemeProvider is wrapping all of the logic for state 
//and pushing 
//different values to the children

export default function App() {

  return (
    <div className='App'>
    <ThemeProvider>
      <FunctionContextComponent/>
    </ThemeProvider>
    </div>
  );
}


