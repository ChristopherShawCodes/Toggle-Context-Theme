import React,{useContext,useState} from 'react'


const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

//--------------------------------------------
//These 2 export functions are custom hooks
// provide easy access to custom values

//--------------------------------------------
export function useTheme() {
    return useContext(ThemeContext)
}
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}
//------------------------------------------------

//ThemeProvider handles 
//Creating State
//Updating State
// and displaying values into the children

export function ThemeProvider({ children }){
    const [darkTheme, setDarkTheme] = useState(true)//creating state

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)//updating state
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}