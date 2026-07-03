import { Navbar } from "./components/navigation";
import {
    Home,
    About,
    Education,
    Skills,
    Resume,
    Contact,
} from "./components/sections";
import { ScrollContext, LenisContext } from "./context";

import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Scrollbar from "./components/ui/Scrollbar";
import ParticleBackground from "./components/ui/ParticleBackground";
import Lenis from "lenis";

function App() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const wrapper = scrollRef.current;
        if (!wrapper) return;

        const content = wrapper.firstElementChild as HTMLElement;

        const lenis = new Lenis({
            wrapper,
            content,
            duration: 1.2,
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        let rafId: number;

        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenisRef}>
            <ScrollContext.Provider value={scrollRef}>
                <Box sx={{ height: "100vh", position: "relative" }}>
                    <Box
                        ref={scrollRef}
                        sx={{
                            height: "100%",
                            overflow: "auto",

                            // Firefox
                            scrollbarWidth: "none",
                            // Internet Explorer
                            msOverflowStyle: "none",
                            // Chrome/Safari/Edge
                            "&::-webkit-scrollbar": {
                                display: "none",
                            },
                        }}
                    >
                        <Box>
                            <Navbar />
                            <ParticleBackground />

                            <Box sx={{ pt: "7.5vh", pb: "20vh" }}>
                                <Home />
                                <About />
                                <Education />
                                <Skills />
                                <Resume />
                                <Contact />
                            </Box>
                        </Box>
                    </Box>

                    <Scrollbar scrollRef={scrollRef} />
                </Box>
            </ScrollContext.Provider>
        </LenisContext.Provider>
    );
}

export default App;