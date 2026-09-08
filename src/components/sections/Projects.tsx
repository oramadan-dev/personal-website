import { Box, Link, Typography } from "@mui/material";
import { Header } from "../ui";
import Section from "./Section";

export default function Projects() {
    return (
        <Section id="projects" sx={{ height: "auto", minHeight: "auto", py: { xs: 8, md: 10 } }}>
            <Header variant="h3" component="h2">PROJECTS</Header>
            <Box sx={{ mt: 3, width: "100%", maxWidth: 700 }}>
                <Link href={`${import.meta.env.BASE_URL}deadlock/`} underline="hover" variant="h6">
                    Deadlock Tracker
                </Link>
                <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Explore Deadlock players, matches, heroes, and performance statistics.
                </Typography>
            </Box>
            <Box sx={{ mt: 4, width: "100%", maxWidth: 700 }}>
                <Link href="https://github.com/oramadan-dev/ratto-bot" underline="hover" variant="h6">
                    Ratto Bot · GitHub
                </Link>
                <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    A Discord bot with a currency system, games, jokes, and TTRPG group playtime management.
                </Typography>
            </Box>
            <Box sx={{ mt: 4, width: "100%", maxWidth: 700 }}>
                <Link href="https://github.com/oramadan-dev/chronos" underline="hover" variant="h6">
                    Chronos · GitHub
                </Link>
                <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    An experimental world and history simulation exploring AI-assisted development,
                    starting with people moving through a 2D world toward forming settlements.
                </Typography>
            </Box>
        </Section>
    );
}
