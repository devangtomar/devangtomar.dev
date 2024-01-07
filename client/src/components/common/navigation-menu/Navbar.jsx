import { Dark } from "../theme/Dark"

export default function Navbar() {
    return (
        <>
            <nav class="opacity-50 bg-white dark:bg-gray-800 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center mb-3">
                        <img src="https://avatars.githubusercontent.com/u/32426600?v=4" class="mr-3 w-10 rounded-full" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white">Devang Tomar</span>
                    </a>
                    <div class="flex items-center ml-auto">
                        <div class="flex mr-2">
                            <a className="cursor-pointer block py-2 pl-3 pr-4 text-gray-700 text-xl hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-100 duration-300">
                                <button
                                    id="theme-toggle"
                                    type="button"
                                    className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm drop-shadow-2xl"
                                    onClick={Dark}
                                >
                                    <svg
                                        id="theme-toggle-dark-icon"
                                        className="w-6 h-6 hidden"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                        ></path>
                                    </svg>
                                    <svg
                                        id="theme-toggle-light-icon"
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </a>
                            <button
                                data-collapse-toggle="navbar-user"
                                type="button"
                                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-user"
                                aria-expanded="false"
                            >
                                <span class="sr-only">Open main menu</span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mb-2" id="navbar-user">
                        <ul class="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700 text-sm">
                            <li>
                                <a href="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold">About</a>
                            </li>
                            <li>
                                <a href="/blog" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold">Blog</a>
                            </li>
                            <li>
                                <a href="/projects" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold">Projects</a>
                            </li>
                            <li>
                                <a href="/illustration" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold">Illustration</a>
                            </li>
                            <li>
                                <a href="https://github.com/devangtomar" target="_blank" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold">GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}