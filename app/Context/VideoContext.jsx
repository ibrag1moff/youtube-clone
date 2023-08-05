"use client";
// react
import { createContext, useContext, useState, useEffect } from "react";

// utils
import { fetchData } from "@/utils/fetchData";

const VideoContext = createContext({});

export const useVideo = () => {
    return useContext(VideoContext);
};

export default function VideoProvider({ children }) {
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchData(`search?part=snippet&q=${selectedCategory}`).then((data) =>
            setVideos(data.items)
        );
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [selectedCategory]);

    return (
        <VideoContext.Provider
            value={{ videos, selectedCategory, setSelectedCategory, loading }}
        >
            {children}
        </VideoContext.Provider>
    );
}
