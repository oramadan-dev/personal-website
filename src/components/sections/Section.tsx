import {Box, SxProps} from "@mui/material";
import type { ReactNode } from "react";

interface SectionProps {
    id: string;
    children?: ReactNode;
    sx?: SxProps;
}

export default function Section({ id, children, sx }: SectionProps) {
    return (
        <Box
            id={id}
            component="section"
            sx={[
                {
                    scrollMarginTop: "64px",
                    minHeight: "100vh",
                    height: "100vh",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
        >

            <Box sx={{ transform: "translateY(-75px)" }}>
                {children}
            </Box>

        </Box>
    );
}