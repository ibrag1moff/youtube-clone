"use client";
// icons
import { usePathname } from "next/navigation";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer
            className={
                pathname == "/"
                    ? "hidden"
                    : "bg-[#333] flex items-center justify-between px-4 md:px-24 py-3"
            }
        >
            <span className="font-semibold xs:text-lg">
                Created by ibrag1moff.
            </span>

            <a className="bg-main font-bold p-3 rounded-full" href="#">
                <AiOutlineArrowUp size={25} />
            </a>
        </footer>
    );
}
