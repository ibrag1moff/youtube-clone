// components
import VideoCard from "./VideoCard";

// context
import { useVideo } from "@/app/Context/VideoContext";

// react loading skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ChannelVideos({ data }) {
    const { loading } = useVideo();

    if (loading) {
        return (
            <div className="mx-auto w-[80%]">
                <Skeleton count={20} />
            </div>
        );
    } else {
        return (
            <div className="flex flex-wrap items-center justify-center gap-8">
                {data?.map((item, i) => {
                    return (
                        <div key={i}>
                            {item.id.videoId && <VideoCard data={item} />}
                        </div>
                    );
                })}
            </div>
        );
    }
}
