export default function Footer() {
    return (
        <>
            <footer className="opacity-50 bg-white dark:bg-gray-800 w-full bottom-0 left-0  ">
                <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
                    <div>
                        <span className="font-semibold dark:text-white">Made with ❤️ by Devang</span>
                    </div>
                    <div className="items-center justify-between md:flex md:w-auto" id="navbar-user">
                        <ul className="flex font-medium p-4 space-x-4  md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <img className='w-8' src="https://img.icons8.com/doodle/48/twitter-circled.png" alt="twitter-circled"/>
                            </li>
                            <li>
                                <img className='w-8' src="https://img.icons8.com/doodle/48/linkedin--v2.png" alt="linkedin--v2"/>
                            </li>
                            <li>
                                <img className='w-8' src="https://img.icons8.com/doodle/48/facebook-circled.png" alt="facebook-circled"/>
                            </li>
                            <li>
                                <img className='w-8' src="https://img.icons8.com/doodle/48/instagram--v1.png" alt="instagram--v1"/>
                            </li>
                            <li>
                                <img className='w-8' src="https://img.icons8.com/glyph-neue/64/medium-monogram.png" alt="medium-monogram"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
