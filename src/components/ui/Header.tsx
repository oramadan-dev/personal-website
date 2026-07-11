import { Typography, TypographyProps } from "@mui/material";
import { keyframes } from "@mui/system";

const shimmer = keyframes`
    from {
        background-position: 300% 0;
    }

    to {
        background-position: -300% 0;
    }
`;

interface HeaderProps extends TypographyProps {}

export default function Header({ children, sx, ...props }: HeaderProps) {
    return (
        <Typography
            {...props}
            sx={[
                {
                    background: "linear-gradient(110deg, #7237ed 44%, #cbb5ff 50%, #7237ed 56%)",
                    backgroundSize: "300% 100%",
                    backgroundPosition: "-300% 0",

                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",

                    animation: `${shimmer} 18.6s linear infinite`
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
        >
            {children}
        </Typography>
    );
}