// next
import Link from "next/link";

// icons
import { MdVerified } from "react-icons/md";

export default function VideoCard({
    data: {
        id: { videoId },
        snippet,
    },
}) {
    return (
        <div className="w-[300px] xs:w-[320px]">
            <Link href={`/video/${videoId}`}>
                <img
                    className="w-[300px] xs:w-[320px] h-[180px] object-cover"
                    src={snippet?.thumbnails?.medium?.url}
                    alt={snippet?.title}
                />
            </Link>
            <div className="bg-[#333] p-2 rounded-ee-3xl min-h-[110px] flex flex-col items-center justify-center">
                <h1 className="text-center font-medium">
                    {snippet?.title.slice(0, 60)}
                </h1>
                <Link
                    href={`/channel/${snippet?.channelId}`}
                    className="flex items-center gap-1 text-gray-300"
                >
                    {snippet?.channelTitle}
                    <MdVerified />
                </Link>
            </div>
        </div>
    );
}
