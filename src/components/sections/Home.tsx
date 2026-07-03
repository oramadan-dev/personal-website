import Section from "./Section";
import { Box, keyframes, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { scrollTo } from "../navigation/Navbar";

export interface HomeProps {
    scrollRef: React.RefObject<HTMLDivElement | null>
}

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
`;

export default function Home({ scrollRef } : HomeProps) {

    const [opacity, setOpacity] = useState<number>(1);

    useEffect(() => {

        const element = scrollRef.current;

        const changeOpacity = () => {
            const progress = Math.min(element.scrollTop / window.innerHeight, 1);
            setOpacity(Math.pow(1 - progress, 4));
        }

        element.addEventListener('scroll', changeOpacity)

    }, [])

    return (
        <Section id="home" >

            <Typography variant='h1' sx={{ opacity: opacity }}>
                OMAR RAMADAN
            </Typography>

            <Typography variant="h6" sx={{ ml: 1, opacity: opacity }}>
                Full Stack Engineer
            </Typography>


            <Box sx={{ width: '100%', maxWidth: '30vw', minWidth: 500, ml: 1, mt: 3 }}>
                <Typography variant="body1" sx={{ opacity: opacity }}>
                    Hello, I'm Omar.
                    <br />
                    A full-stack software engineer specializing in building robust, scalable backend systems and responsive
                    web applications. From designing APIs and databases to creating intuitive user interfaces, I enjoy
                    turning ideas into reliable, high-quality software.
                </Typography>
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    bottom: -125,
                    left: "50%",
                    animation: `${bounce} 2s infinite`,
                }}
            >
                <KeyboardArrowDownIcon
                    sx={{
                        fontSize: 75,
                        opacity,
                        color: "text.secondary",
                        cursor: "pointer",
                        transition: "transform 0.2s",
                        "&:hover": {
                            transform: "scale(1.2)",
                            color: "#8B5CF6",
                        },
                    }}
                    onClick={() => scrollTo("about")}
                />
            </Box>


        </Section>
    );

}