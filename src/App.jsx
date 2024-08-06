import { useContext } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons from react-icons
import './index.css';

const App = () => {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
};

const ThemedComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <h1 className="text-3xl font-bold mb-8">
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </h1>
            <button
                onClick={toggleTheme}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-500 ${theme === 'light' ? 'bg-orange-500' : 'bg-blue-800'}`}
            >
        <span className="icon">
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </span>
                Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
};

export default App;