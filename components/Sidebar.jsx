"use client";
// next & react
import Link from "next/link";

// icons
import { AiFillHome, AiFillYoutube } from "react-icons/ai";
import { FaChess, FaUserGraduate, FaReact } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { GiGamepad } from "react-icons/gi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdSportsSoccer } from "react-icons/md";

// context
import { useVideo } from "@/app/Context/VideoContext";
import { useSidebar } from "@/app/Context/SidebarContext";

export default function Sidebar() {
    const links = [
        {
            title: "New",
            icon: <AiFillHome fill="#9300ff" size={25} />,
        },
        {
            title: "Mr Beast",
            icon: <AiFillYoutube fill="#9300ff" size={25} />,
        },
        {
            title: "Coding",
            icon: <FaReact fill="#9300ff" size={25} />,
        },
        {
            title: "Music",
            icon: <BsMusicNote fill="#9300ff" size={25} />,
        },
        {
            title: "Chess",
            icon: <FaChess fill="#9300ff" size={25} />,
        },
        {
            title: "Education",
            icon: <FaUserGraduate fill="#9300ff" size={25} />,
        },

        {
            title: "Movie",
            icon: <BiCameraMovie fill="#9300ff" size={25} />,
        },
        {
            title: "Gaming",
            icon: <GiGamepad fill="#9300ff" size={25} />,
        },
        {
            title: "Live",
            icon: <PiTelevisionSimpleBold fill="#9300ff" size={25} />,
        },
        {
            title: "Sport",
            icon: <MdSportsSoccer fill="#9300ff" size={25} />,
        },
    ];
    const { selectedCategory, setSelectedCategory } = useVideo();
    const { sidebarActive } = useSidebar();

    return (
        <div
            className={
                sidebarActive
                    ? "absolute top-0 left-0 z-10 bg-black border-r border-[#3c3c3c] p-4 h-full w-[280px] transition-all duration-300"
                    : "fixed top-0 left-[-100%] pt-[100px] transition-all duration-300 lg:left-0 lg:bg-black lg:border-r h-full lg:border-[#3c3c3c] lg:p-4 lg:w-[250px]"
            }
        >
            <div className="flex flex-col gap-8">
                <Link className="z-10" href="/">
                    <img className="w-[60px]" src="/logo.png" alt="Logo" />
                </Link>
                {links.map((link, i) => {
                    return (
                        <Link
                            className="flex items-center gap-4"
                            key={i}
                            href="/"
                            onClick={() => setSelectedCategory(link.title)}
                        >
                            {link.icon}
                            <span
                                className={
                                    selectedCategory == link.title
                                        ? "text-main hover:text-main"
                                        : "hover:text-main"
                                }
                            >
                                {link.title}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
