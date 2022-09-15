import {React, createContext,useState} from 'react';


const DarkModeContext = createContext();

const DarkModeProvider= (props) => {

    const [darkMode, setDarkmode] = useState(false);     //False or true// Lighr o Dark

    const toggleDarkmode = () => {
        setDarkmode(!darkMode)
    }

    /*
    const agregarDarkMode = () => {
        setDarkmode("dark")
    }

    const quitarDarkMode = () => {
        setDarkmode("light")
    }
    */

    return (
        <>
            <DarkModeContext.Provider value={{darkMode,toggleDarkmode}}>
                {props.children}
            </DarkModeContext.Provider>
        </>
    );
}

export {DarkModeContext, DarkModeProvider};


