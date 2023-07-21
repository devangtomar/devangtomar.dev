import Navbar from "../../components/common/navigation-menu/Navbar"
import Footer from "../../components/common/footer/Footer"

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="relative max-w-screen-md flex-wrap mx-auto p-4 pt-24">
                <h1 className="text-4xl max-w-md font-extrabold">Hey, I'm Devang!</h1>
                <h2 className="text-xl max-w-md mt-4 font-semibold">Welcome to my digital garden. 🌱</h2>
                <p className="mt-4 max-w-md">I'm a software developer in Bangalore. I make open-source projects and write about code, design, and life. I like coding, reading, and gaming.</p>
            </div>
            <Footer></Footer>
        </div>
    )
}
