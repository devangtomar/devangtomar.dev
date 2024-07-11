
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    return (
        <>
            <nav class="opacity-50 bg-white dark:bg-gray-800 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                    <a href="/" class="flex items-center mb-3">
                        <img
                            src="https://avatars.githubusercontent.com/u/32426600?v=4"
                            class="mr-3 w-8 rounded-full"
                            alt="Flowbite Logo"
                        />
                        <span class="self-center text-2xl  whitespace-nowrap dark:text-white font-bold">
                            Devang Tomar
                        </span>
                    </a>
                    <div
                        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mb-2"
                        id="navbar-user"
                    >
                        <ul class="flex items-center flex-col font-medium p-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700 text-lg">
                            <li>
                                    <ThemeSwitcher />
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                                >
                                    Articles
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/illustration"
                                    class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                                >
                                    Illustration
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/devangtomar"
                                    target="_blank"
                                    class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-purple-400 md:p-0 dark:text-white md:dark:hover:text-purple-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " rel="noreferrer"
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