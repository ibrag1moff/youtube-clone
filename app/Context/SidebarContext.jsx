"use client";
// react
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext({});

export const useSidebar = () => {
    return useContext(SidebarContext);
};

export default function SidebarProvider({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);
    return (
        <SidebarContext.Provider value={{ sidebarActive, setSidebarActive }}>
            {children}
        </SidebarContext.Provider>
    );
}
