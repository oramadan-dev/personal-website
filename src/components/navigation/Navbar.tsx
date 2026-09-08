import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Box,
} from "@mui/material";
import { useLenis } from "../../context";

export default function Navbar() {

    const lenisRef = useLenis();
    const scrollTo = (id: string) => {
        lenisRef.current?.scrollTo(`#${id}`, {
            offset: -window.innerHeight * 0.075,
        });
    };

    return (
        <AppBar position="sticky" elevation={0} sx={{ borderBottom: 'none', bgcolor: 'background.paper' }}>
            <Toolbar
                sx={{
                    gap: { xs: 1.25, md: 2 },
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    alignItems: "center",
                    py: { xs: 1, md: 0 },
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        color: "white",
                        minWidth: { xs: "100%", sm: "auto" },
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
                    }}
                    onClick={() => scrollTo("home")}
                >
                    Omar Ramadan | Portfolio
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: { xs: 0.25, sm: 0.5 },
                        overflowX: "auto",
                        width: { xs: "100%", sm: "auto" },
                        pb: { xs: 0.25, sm: 0 },
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    <Button onClick={() => scrollTo("home")}>
                        Home
                    </Button>

                    <Button onClick={() => scrollTo("about")}>
                        About
                    </Button>

                    <Button onClick={() => scrollTo("stack")}>
                        Stack
                    </Button>

                    <Button onClick={() => scrollTo("resume")}>
                        Resume
                    </Button>

                    <Button onClick={() => scrollTo("projects")}>
                        Projects
                    </Button>

                    <Button onClick={() => scrollTo("contact")}>
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
