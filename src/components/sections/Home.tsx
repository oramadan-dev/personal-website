import Section from "./Section";
import { Box, Typography } from "@mui/material";

export default function Home() {

    return (
        <Section id="home" nextSectionId="about" >

            <Typography variant='h1' >
                OMAR RAMADAN
            </Typography>

            <Typography variant="h6" sx={{ ml: 1 }}>
                Full Stack Engineer
            </Typography>


            <Box sx={{ width: '100%', maxWidth: '30vw', minWidth: 500, ml: 1, mt: 3 }}>
                <Typography variant="body1" >
                    Hello! I'm Omar.
                    <br />
                    I am a full-stack software engineer who specializes in building robust, scalable backend systems
                    and responsive web applications. From designing APIs and databases to creating intuitive user
                    interfaces, I enjoy turning ideas into reliable, high-quality software.
                </Typography>
            </Box>

        </Section>
    );

}