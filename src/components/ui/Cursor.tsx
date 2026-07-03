import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Position } from "../../types/Position";

export default function Cursor() {

    const [position, setPosition] = useState<Position>({x: 0, y: 0})

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY})
        }

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <Box
            sx={{
                position: "fixed",
                left: position.x,
                top: position.y,
                width: 12,
                height: 12,
                bgcolor: "white",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 99999,
            }}
        />
    );

}