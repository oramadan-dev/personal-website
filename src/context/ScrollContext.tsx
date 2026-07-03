import { createContext, useContext, type RefObject } from "react";

export const ScrollContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

export function useScrollRef() {
    const scrollRef = useContext(ScrollContext);

    if (!scrollRef) {
        throw new Error("useScrollRef must be used within ScrollContext.Provider");
    }

    return scrollRef;
}