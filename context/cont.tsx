"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
    open: boolean;
    setopen: () => void;
}

const AppContext = createContext<ContextType | undefined>(undefined);

interface ProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: ProviderProps) => {
    const [open, setOpen] = useState<boolean>(false);

    // ✅ version correcte pour toggle
    const setopen = () => setOpen(prev => !prev);

    return (
        <AppContext.Provider value={{ open, setopen }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
