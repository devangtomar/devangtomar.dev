import Navbar from "../../components/common/navigation-menu/Navbar";
import Footer from "../../components/common/Footer/Footer";
import Latest from "../latest/Latest";

export default function About() {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className="max-w-screen-md flex items-center justify-between mx-auto dark:text-white">
                    <div className="flex p-8">
                        <div className="">
                            <h1 className="text-4xl font-extrabold">About me</h1>
                            <div className="flex-wrap mx-auto ">
                                <p className="mt-4 break-words">
                                    Hey, I'm Devang! I'm a software developer working in
                                    Bangalore. Welcome to my spot on the web for my projects,
                                    tutorials, art, musings, and anything else I want to show the
                                    world. Check out the{" "}
                                    <a
                                        href="/projects"
                                        class=" text-purple-400 underline"
                                    >
                                        projects
                                    </a>{" "}
                                    page to see a highlight of my open-source work, and the{" "}
                                    <a href="/blog" class=" text-purple-400 underline">
                                        blog
                                    </a>{" "}
                                    for my tutorials and more.
                                </p>
                                <p className="mt-4 break-words">
                                    My site has no ads, no affiliate links, no tracking or
                                    analytics, no sponsored posts, and no paywall. My only
                                    motivation for this site is to share what I've learned with
                                    the world. Although the tide is against me, I want to make the internet a
                                    better place, even if it's just right here. I hope I will
                                    inspire others to make their own creative corner on the web as
                                    well.
                                </p>
                                <p className="mt-4 break-words">
                                    You can contact me by email at hello at toBeDecided.com
                                    to say hi! I always appreciate meeting new people.
                                </p>
                                <ul className="list-disc mt-4 pl-8">
                                    <li className=""><a href="#" class=" text-purple-400 underline">Newsletter</a></li>
                                    <li className=""><a href="#" class=" text-purple-400 underline">GitHub</a></li>
                                    <li className=""><a href="#" class=" text-purple-400 underline">Twitter</a></li>
                                </ul>
                            </div>
                            <h1 className="text-2xl font-extrabold mt-10">What I'm doing now</h1>
                            <p className="mt-4 break-words">
                                Updated February 15th, 2023
                                <ul className="list-disc mt-4 pl-8">
                                    <li className="">My end of year review: <a href="#" class=" text-purple-400 underline">2022 into 2023</a></li>
                                </ul>
                            </p>
                            <h1 className="text-2xl font-extrabold mt-10">Random facts</h1>
                            <p className="mt-4 break-words">
                                <ul className="list-disc mt-4 pl-8">
                                    <li className="">My end of year review: <a href="#" class=" text-purple-400 underline">2022 into 2023</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
