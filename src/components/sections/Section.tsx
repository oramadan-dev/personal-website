import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface SectionProps {
    id: string;
    children?: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
    return (
        <Box
            id={id}
            component="section"
            sx={{
                minHeight: "100vh",
                py: 8,
                scrollMarginTop: "64px",
            }}
        >
            {children}
        </Box>
    );
}