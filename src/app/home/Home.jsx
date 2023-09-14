import Navbar from "../../components/common/navigation-menu/Navbar"
import Footer from "../../components/common/Footer/Footer"

export default function Home() {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-screen-md flex-row flex items-center justify-between mx-auto pt-10">
                <div className="flex-wrap mx-auto p-8 dark:text-white">
                    <h1 className="text-4xl max-w-md font-extrabold">Hey, I'm Devang!</h1>
                    <h2 className="text-xl max-w-md mt-4 font-semibold">Welcome to my digital garden 🌱</h2>
                    <p className="mt-4 max-w-md break-words">I'm a software developer 👨‍💻 currently based in Bangalore 🌆. I make open-source projects 🌟 and write about code, design, and life 📝. I enjoy coding 🖥️, reading 📚, and gaming 🎮.</p>
                    <p className="mt-4 max-w-md break-words">I love working in-between product, engineering and developer experience , currently at Walmart 📦</p>
                </div>
                <div className="flex">
                    <img className="" src="https://img.icons8.com/doodle/480/telegram.png" alt="telegram" /></div>
            </div>
            <div className="max-w-screen-md flex items-center justify-between mx-auto pt-10">
                <div className="flex p-8">
                    <div className="dark:text-white ">
                        <h1 className="text-4xl max-w-md font-extrabold">Latest Posts 🔦</h1>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
