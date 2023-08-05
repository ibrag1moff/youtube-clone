"use client";
// next & react
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

// react player
import ReactPlayer from "react-player";

// components
import Videos from "@/components/Videos";
import ChannelVideos from "@/components/ChannelVideos";

// utils
import { fetchData } from "@/utils/fetchData";

// icons
import { MdVerified } from "react-icons/md";
import Sidebar from "@/components/Sidebar";

export default function VideoDetails() {
    const { id } = useParams();
    const [readMore, setReadMore] = useState(false);
    const [channelVideos, setChannelVideos] = useState([]);
    const [videoDetail, setVideoDetail] = useState([]);

    // console.log(videoDetail);

    useEffect(() => {
        fetchData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
            setVideoDetail(data.items[0])
        );

        fetchData(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setChannelVideos(data?.items)
        );
    }, [id]);

    // const {
    //     statistics: { commentCount, favoriteCount, likeCount, viewCount },
    // } = videoDetail;

    return (
        <>
            <div className="lg:hidden">
                <Sidebar />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center container">
                    <div className="w-full mt-[40px]">
                        <ReactPlayer
                            className="react-player"
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width={"100%"}
                            height={"450px"}
                        />
                    </div>
                    <div className="mt-[30px]">
                        <span className="text-gray-400">
                            {Number(
                                videoDetail?.statistics?.viewCount
                            ).toLocaleString()}{" "}
                            views
                        </span>
                        <h1 className="font-bold text-2xl mb-2">
                            {videoDetail.snippet?.title}
                        </h1>
                        <p className="text-gray-400 mb-2 max-w-[700px]">
                            {readMore
                                ? videoDetail.snippet?.description
                                : videoDetail.snippet?.description.substring(
                                      0,
                                      200
                                  )}
                            <button
                                onClick={() => setReadMore(!readMore)}
                                className="font-bold text-main"
                            >
                                {readMore ? "...less" : "...more"}
                            </button>
                        </p>
                        <Link
                            href={`/channel/${videoDetail?.snippet?.channelId}`}
                            className="flex items-center gap-1 font-medium"
                        >
                            {videoDetail?.snippet?.channelTitle}
                            <MdVerified />
                        </Link>
                        <div className="flex flex-col">
                            <span className="mt-2 text-gray-400">
                                Likes:{" "}
                                {Number(
                                    videoDetail?.statistics?.likeCount
                                ).toLocaleString()}
                            </span>
                            <span className=" text-gray-400">
                                Comments:{" "}
                                {Number(
                                    videoDetail?.statistics?.commentCount
                                ).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="my-[40px]">
                    <Videos />
                </div>
            </div>
        </>
    );
}
