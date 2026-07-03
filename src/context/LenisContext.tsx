import { createContext, useContext, type RefObject } from "react";
import type Lenis from "lenis";

export const LenisContext =
    createContext<RefObject<Lenis | null> | null>(null);

export function useLenis() {
    const lenisRef = useContext(LenisContext);

    if (!lenisRef) {
        throw new Error("useLenis must be used within LenisContext.Provider");
    }

    return lenisRef;
}