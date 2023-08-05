"use client";
// context
import { useVideo } from "@/app/Context/VideoContext";

// components
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

// react loading skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Videos() {
    const { videos, loading } = useVideo();

    if (loading) {
        return (
            <div className="mx-auto w-[80%]">
                <Skeleton count={20} />
            </div>
        );
    } else {
        return (
            <div className="flex flex-wrap items-center justify-center gap-8">
                {videos.map((item, i) => {
                    return (
                        <div key={i}>
                            {item.id.videoId && <VideoCard data={item} />}
                            {item.id.channelId && <ChannelCard data={item} />}
                        </div>
                    );
                })}
            </div>
        );
    }
}
