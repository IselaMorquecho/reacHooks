import React, {useState, useContext} from 'react';
import ThemeContext from "../context/ThemeContext";

function Header() {
    const [darkMode, setDarkMode] = useState(false)
    const color = useContext(ThemeContext)

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={Header}>
            <h1 style={{color}}>ReactHooks</h1>
            <button type={'button'} onClick={handleClick}>
                {darkMode ? 'Dark mode': 'Light mode'}
            </button>
        </div>
    );
}

export default Header;