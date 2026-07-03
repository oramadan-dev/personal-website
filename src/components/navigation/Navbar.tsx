import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Box,
} from "@mui/material";
import {useLenis} from "../../context/LenisContext";

export default function Navbar() {

    const lenisRef = useLenis();
    const scrollTo = (id: string) => {
        lenisRef.current?.scrollTo(`#${id}`, {
            offset: -window.innerHeight * 0.075,
        });
    };

    return (
        <AppBar position="sticky" elevation={0} sx={{ borderBottom: 'none', bgcolor: 'background.paper' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }} onClick={() => scrollTo("home")}>
                    Omar Ramadan | Portfolio
                </Typography>

                <Box>
                    <Button onClick={() => scrollTo("home")}>
                        Home
                    </Button>

                    <Button onClick={() => scrollTo("about")}>
                        About
                    </Button>

                    <Button onClick={() => scrollTo("education")}>
                        Education
                    </Button>

                    <Button onClick={() => scrollTo("skills")}>
                        Skills
                    </Button>

                    <Button onClick={() => scrollTo("resume")}>
                        Resume
                    </Button>

                    <Button onClick={() => scrollTo("contact")}>
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}