import { RefObject, useEffect, useState } from "react";
import {Box} from "@mui/material";

export interface CustomScrollbarProps {
    scrollRef: RefObject<HTMLDivElement | null>;
}

export default function Scrollbar({ scrollRef } : CustomScrollbarProps) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        const updateProgress = () => {
            const maxScroll = element.scrollHeight - element.clientHeight;
            setProgress(maxScroll > 0 ? element.scrollTop / maxScroll : 0);
        };

        updateProgress();
        element.addEventListener('scroll', updateProgress);
        window.addEventListener('resize', updateProgress);

        return () => {
            element.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        }
    }, [ scrollRef]);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '35%',
                bottom: '35%',
                right: 24,
                width: 6,
                bgcolor: '#222',
                borderRadius: 3,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: `${progress * 100}%`,
                    bgcolor: 'purple',
                    borderRadius: 3,
                }}
            />
        </Box>
    );

}