// src/components/common/Navbar.js
"use client"; // Make sure to include this

import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme(); // Ensure this is destructured correctly

    return (
        <nav className="opacity-50 bg-white dark:bg-gray-800 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                <a href="/" className="flex items-center mb-3">
                    <img
                        src="https://avatars.githubusercontent.com/u/32426600?v=4"
                        className="mr-3 w-8 rounded-full"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl whitespace-nowrap dark:text-white font-bold">
                        Devang Tomar
                    </span>
                </a>
                <div className="flex items-center ml-auto">
                    <button
                        onClick={toggleTheme} // Ensure toggleTheme is defined
                        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm drop-shadow-2xl"
                    >
                        {theme === 'light' ? (
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}