"use client";
// next & react
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// components
import SearchVideo from "@/components/SearchVideo";
import Sidebar from "@/components/Sidebar";

// utils
import { fetchData } from "@/utils/fetchData";

export default function SearchFeed() {
    const { searchTerm } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchData(`search?part=snippet&q=${searchTerm}`).then((data) =>
            setVideos(data.items)
        );
    }, [searchTerm]);

    return (
        <>
            <div className="flex lg:hidden">
                <Sidebar />
            </div>
            <div>
                <h1 className="flex flex-col lg:flex-row lg:gap-2 items-center justify-center text-center font-semibold text-2xl sm:text-3xl lg:text-4xl">
                    Search results for
                    <span className="text-main">{searchTerm}</span>
                </h1>

                <div className="mt-12">
                    <SearchVideo data={videos} />
                </div>
            </div>
        </>
    );
}
