import { useRef, type ReactNode } from "react";
import { Box, type SxProps } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useSectionFade } from "../../hooks/useSectionFade";
import { useScrollRef, useLenis } from "../../context";
import { bounce } from "../../utils/keyframes";

interface SectionProps {
    id: string;
    nextSectionId?: string;
    children?: ReactNode;
    sx?: SxProps;
}

export default function Section({
    id,
    nextSectionId,
    children,
    sx,
}: SectionProps) {
    const scrollRef = useScrollRef();
    const lenisRef = useLenis();

    const sectionRef = useRef<HTMLDivElement>(null);
    const opacity = useSectionFade(scrollRef, sectionRef);

    return (
        <Box
            ref={sectionRef}
            id={id}
            component="section"
            sx={[
                {
                    scrollMarginTop: "64px",
                    minHeight: "75vh",
                    height: "75vh",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
        >
            <Box
                sx={{
                    opacity,
                    transition: "opacity 50ms linear",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box>
                    {children}
                </Box>

                {nextSectionId && (
                    <KeyboardArrowDownIcon
                        onClick={() => lenisRef.current?.scrollTo(`#${nextSectionId}`, {
                            offset: -window.innerHeight * 0.075,
                        })}
                        sx={{
                            mt: 8,
                            fontSize: 75,
                            color: "text.secondary",
                            cursor: "pointer",
                            animation: `${bounce} 2s infinite`,
                            transition: "transform 0.2s, color 0.2s",

                            "&:hover": {
                                transform: "scale(1.2)",
                                color: "#8B5CF6",
                            },
                        }}
                    />
                )}
            </Box>
        </Box>
    );
}