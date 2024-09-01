"use client";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
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
                        <div className="flex mr-2">
                            <button
                                type="button"
                                className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-user"
                                aria-expanded={isOpen}
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-2 mb-2 ${isOpen ? "flex" : "hidden"}`}
                        id="navbar-user"
                    >
                        <ul className="flex items-center flex-col justify-center text-center font-medium p-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700 text-lg">
                            <li>
                                <ThemeSwitcher />
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Articles
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/illustration"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Illustration
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/devangtomar"
                                    target="_blank"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    rel="noreferrer"
                                >
                                    About Me
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}