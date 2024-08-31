import Navbar from "../../components/common/navigation-menu/Navbar";
import Footer from "../../components/common/Footer/Footer";
import Latest from "../latest/Latest";

export default function Home() {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-screen-xl flex-row flex items-center justify-between mx-auto pt-10">
                <div className="flex-wrap mx-auto p-8 dark:text-white">
                    <h1 className="text-5xl font-extrabold font-mono">
                        Hey, I'm Devang!
                    </h1>
                    <h2 className="text-2xl max-w-md mt-4 font-semibold">
                        Welcome to my digital garden 🌱
                    </h2>
                    <p className="text-lg mt-4 max-w-md break-words">
                        I'm a Senior Software Engineer currently based in Bangalore 🌆. I
                        make open-source projects and write about code, design, and life . I
                        enjoy coding 🖥️, reading 📚, and gaming 🎮.
                    </p>
                    <p className="text-lg mt-4 max-w-md break-words">
                        I love working in-between product, engineering and developer
                        experience, currently at SAP Labs 🧑🏻‍💻
                    </p>
                </div>
                <div className="flex">
                    <img
                        className=""
                        src="https://img.icons8.com/clouds/550/mando.png"
                        alt="telegram"
                    />
                </div>
            </div>
            <Latest></Latest>
            <Footer></Footer>
        </div>
    );
}
