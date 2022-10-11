import React,{ useState } from 'react';
import './App.css';
import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent';




export const ThemeContext = React.createContext()

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <div className='App'>
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent/>
      <ClassContextComponent/>
    </ThemeContext.Provider>
    </div>
  );
}


