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
import { useRef } from "react";
import Scrollbar from "./components/ui/Scrollbar";
import ParticleBackground from "./components/ui/ParticleBackground";

function App() {

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ height: '100vh', position: 'relative' }}>

      <Box
        ref={scrollRef}
        sx={{
          height: '100%',
          overflowY: 'auto',

          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Navbar />

        <ParticleBackground scrollRef={scrollRef} />
        {/* Portfolio Sections */}
        <Home />
        <About />
        <Education />
        <Skills />
        <Resume />
        <Contact />
      </Box>

      <Scrollbar scrollRef={scrollRef} />
    </Box>
  )
}

export default App
