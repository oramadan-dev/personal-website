import {
    Box,
    Stack as MuiStack,
    Typography,
} from "@mui/material";
import { Tech } from "../../types/Tech";

export default function TechItem({ tech }: { tech: Tech }) {
    return (
        <MuiStack
            direction="row"
            spacing={1.25}
            sx={{
                alignItems: "center",
                minWidth: { xs: "calc(50% - 8px)", sm: 220 },
                maxWidth: "100%",
                cursor: "default",
                transformOrigin: "left center",
                transition: "transform 0.2s ease",

                "&:hover": {
                    transform: "scale(1.05)",
                },

                "&:hover .tech-icon": {
                    color: "primary.main",
                },

                "&:hover .tech-text": {
                    color: "primary.main",
                },
            }}
        >
            <Box
                className="tech-icon"
                sx={{
                    fontSize: { xs: 24, md: 28 },
                    display: "flex",
                    alignItems: "center",
                    color: "text.secondary",
                    transition: "color 0.2s ease",
                }}
            >
                {tech.icon}
            </Box>

            <Typography
                className="tech-text"
                sx={{
                    transition: "color 0.2s ease",
                    overflowWrap: "anywhere",
                }}
            >
                {tech.name}
            </Typography>
        </MuiStack>
    );
}
