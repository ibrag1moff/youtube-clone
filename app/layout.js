// next
import "./globals.css";
import { Roboto } from "next/font/google";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// context
import VideoProvider from "./Context/VideoContext";
import SidebarProvider from "./Context/SidebarContext";

// react loading skeleton
import { SkeletonTheme } from "react-loading-skeleton";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
    title: "Youtube Clone",
    description: "Created by ibrag1moff.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} bg-black/95`}>
                <VideoProvider>
                    <SidebarProvider>
                        <SkeletonTheme
                            baseColor="#202020"
                            highlightColor="#444"
                        >
                            <Navbar />
                            {children}
                            <Footer />
                        </SkeletonTheme>
                    </SidebarProvider>
                </VideoProvider>
            </body>
        </html>
    );
}
