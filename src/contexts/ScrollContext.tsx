import { createContext, useContext, useState, type ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

interface ScrollContextType {
    isProgrammaticScroll: boolean;
    setIsProgrammaticScroll: (value: boolean) => void;
    lenis: Lenis | null;
    setLenis: (lenis: Lenis | null) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
    const [lenis, setLenis] = useState<Lenis | null>(null);

    return (
        <ScrollContext.Provider
            value={{ isProgrammaticScroll, setIsProgrammaticScroll, lenis, setLenis }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};