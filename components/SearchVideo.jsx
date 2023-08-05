// components
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

export default function SearchVideo({ data }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8">
            {data.map((item, i) => {
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
