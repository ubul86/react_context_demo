import { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Check localStorage for theme preference on initial load
    const storedTheme = localStorage.getItem('theme') || 'light';

    // Initialize state with stored theme
    const [theme, setTheme] = useState(storedTheme);

    // Update localStorage whenever the theme changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle theme between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;