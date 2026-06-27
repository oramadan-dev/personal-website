import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Box,
} from "@mui/material";

const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

export default function Navbar() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Omar Ramadan
                </Typography>

                <Box>
                    <Button color="inherit" onClick={() => scrollTo("home")}>
                        Home
                    </Button>

                    <Button color="inherit" onClick={() => scrollTo("about")}>
                        About
                    </Button>

                    <Button color="inherit" onClick={() => scrollTo("education")}>
                        Education
                    </Button>

                    <Button color="inherit" onClick={() => scrollTo("skills")}>
                        Skills
                    </Button>

                    <Button color="inherit" onClick={() => scrollTo("resume")}>
                        Resume
                    </Button>

                    <Button color="inherit" onClick={() => scrollTo("contact")}>
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}