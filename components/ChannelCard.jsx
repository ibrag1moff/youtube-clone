// next
import Link from "next/link";

// icons
import { MdVerified } from "react-icons/md";

export default function ChannelCard({ data }) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Link href={`/channel/${data?.id.channelId}`}>
                <img
                    className="w-[200px] h-[200px] rounded-full border"
                    src={data?.snippet?.thumbnails?.high?.url}
                    alt={data?.snippet?.title}
                />
                <h1 className="flex items-center justify-center gap-1 mt-2">
                    {data?.snippet?.title}
                    <MdVerified />
                </h1>
                {data?.statistics?.subscriberCount && (
                    <div className="flex items-center justify-center gap-1">
                        <span>
                            {Number(
                                data?.statistics?.subscriberCount
                            ).toLocaleString()}
                        </span>
                        Subscribers
                    </div>
                )}
            </Link>
        </div>
    );
}
