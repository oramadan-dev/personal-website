import { Navbar } from "./components/navigation";
import {
  Home,
  About,
  Education,
  Skills,
  Resume,
  Contact,
} from "./components/sections";

import { Box } from "@mui/material";
import {useEffect, useRef} from "react";
import Scrollbar from "./components/ui/Scrollbar";
import ParticleBackground from "./components/ui/ParticleBackground";
import Lenis from "lenis";

function App() {

  const scrollRef = useRef<HTMLDivElement>(null);

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
      <Box sx={{ height: "100vh", position: "relative" }}>
          <Box ref={scrollRef} sx={{ height: "100%", overflow: "auto" }}>
              <Box>
                  <Navbar />
                  <ParticleBackground scrollRef={scrollRef} />

                  <Home scrollRef={scrollRef} />
                  <About />
                  <Education />
                  <Skills />
                  <Resume />
                  <Contact />
              </Box>
          </Box>

          <Scrollbar scrollRef={scrollRef} />
      </Box>
  )
}

export default App
