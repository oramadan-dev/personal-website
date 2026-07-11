import Section from "./Section";
import { Box, Typography } from "@mui/material";
import { Header } from "../ui";

export default function About() {

    return (
        <Section id="about" nextSectionId="stack">

            <Header variant="h1">
                ABOUT
            </Header>


            <Box sx={{ width: '100%', maxWidth: '30vw', minWidth: 500, ml: 1, mt: 3 }}>
                <Typography variant="body1" >
                    My current work focuses on developing internal tools and data-driven systems
                    that support the management and distribution of mission-critical data. I
                    enjoy working across the entire stack—from designing backend services and
                    APIs to building responsive user interfaces that are deployed across
                    multiple environments.
                    <br />
                    <br />
                    I'm particularly interested in building software that is reliable, maintainable,
                    and easy to extend. Whether I'm designing a REST API, optimizing a database schema,
                    or developing a React interface, I enjoy creating solutions that are both intuitive for users
                    and straightforward for other developers to maintain.
                </Typography>
            </Box>

        </Section>
    );

}