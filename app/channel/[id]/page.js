"use client";
// next & react
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// components
import ChannelCard from "@/components/ChannelCard";
import ChannelVideos from "@/components/ChannelVideos";
import Sidebar from "@/components/Sidebar";

// utils
import { fetchData } from "@/utils/fetchData";

export default function ChannelDetails() {
    const { id } = useParams();

    const [details, setDetails] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchData(`channels?part=snippet&id=${id}`).then((data) =>
            setDetails(data?.items[0])
        );

        fetchData(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setVideos(data?.items)
        );
    }, [id]);

    return (
        <>
            <div className="lg:hidden">
                <Sidebar />
            </div>
            <div className="flex flex-col items-center text-center justify-center">
                <div className="bg-main w-full h-[250px]" />
                <div className="flex items-start mt-[-90px]">
                    <ChannelCard data={details} />
                </div>
                <div className="my-[50px]">
                    <ChannelVideos data={videos} />
                </div>
            </div>
        </>
    );
}
