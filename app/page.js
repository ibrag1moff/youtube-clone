"use client";
// components
import Videos from "@/components/Videos";
import Sidebar from "@/components/Sidebar";

// context
import { useVideo } from "./Context/VideoContext";

export default function Home() {
    const { selectedCategory } = useVideo();
    return (
        <div>
            <Sidebar />
            <h1 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-left lg:ml-[300px]">
                {selectedCategory} <span className="text-main">videos</span>
            </h1>

            <div className="my-12 lg:ml-[200px]">
                <Videos />
            </div>
        </div>
    );
}
