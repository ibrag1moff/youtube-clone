"use client";
// next & react
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// icons
import { BiSearchAlt2 } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// components
import Sidebar from "./Sidebar";
import { useSidebar } from "@/app/Context/SidebarContext";

export default function Navbar() {
    const [searchActive, setSearchActive] = useState(false);

    const { sidebarActive, setSidebarActive } = useSidebar();

    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm) {
            router.push(`/search/${searchTerm}`);
            setSearchTerm("");
        }
    };

    useEffect(() => {
        window.addEventListener("click", () => {
            setSearchActive(false);
        });

        window.addEventListener("click", () => {
            setSidebarActive(false);
        });

        window.addEventListener("scroll", () => {
            setSidebarActive(false);
        });
    }, [searchActive, sidebarActive]);

    const pathname = usePathname();

    return (
        <nav className="py-6 container">
            <div className="flex items-center">
                <Link
                    className={
                        pathname == "/"
                            ? "hidden"
                            : "absolute z-10 hidden lg:flex"
                    }
                    href="/"
                >
                    <img className="w-[60px]" src="/logo.png" alt="Logo" />
                </Link>
                <div
                    className="ml-auto relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="mr-2"
                        onClick={() => setSearchActive(!searchActive)}
                    >
                        <BiSearchAlt2 size={25} />
                    </button>
                    <button
                        className="relative z-10 lg:hidden"
                        onClick={() => setSidebarActive(!sidebarActive)}
                    >
                        {sidebarActive ? (
                            <AiOutlineClose fill="#fff" size={30} />
                        ) : (
                            <BiMenuAltRight size={30} />
                        )}
                    </button>
                    <form
                        onSubmit={handleSearch}
                        className={
                            searchActive
                                ? "absolute top-0 right-[70px]"
                                : "hidden lg:block lg:absolute lg:top-1/2 lg:translate-y-[-50%] lg:right-0"
                        }
                    >
                        <input
                            className="bg-white/30 opacity-[0.5] outline-none py-2 px-6 xs:w-[300px] sm:w-[400px] rounded-full"
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
}
