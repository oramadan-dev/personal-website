import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#8B5CF6",
            light: "#A78BFA",
            dark: "#6D28D9",
        },

        secondary: {
            main: "#06B6D4",
        },

        background: {
            default: "#0F1117",
            paper: "#171923",
        },

        text: {
            primary: "#F3F4F6",
            secondary: "#9CA3AF",
        },

        divider: "#2A2D36",

        success: {
            main: "#22C55E",
        },

        warning: {
            main: "#F59E0B",
        },

        error: {
            main: "#EF4444",
        },
    },

    shape: {
        borderRadius: 12,
    },

    typography: {
        fontFamily: [
            "Inter",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            "sans-serif",
        ].join(","),

        h1: {
            fontSize: "4rem",
            fontWeight: 700,
            letterSpacing: "-0.05em",
        },

        h2: {
            fontSize: "2.5rem",
            fontWeight: 700,
        },

        h3: {
            fontSize: "2rem",
            fontWeight: 600,
        },

        h4: {
            fontSize: "1.5rem",
            fontWeight: 600,
        },

        h5: {
            fontSize: "1.2rem",
            fontWeight: 600,
        },

        body1: {
            fontSize: "1rem",
            lineHeight: 1.8,
        },

        body2: {
            color: "#9CA3AF",
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: "smooth",
                },

                body: {
                    backgroundColor: "#0F1117",
                },

                "*::-webkit-scrollbar": {
                    width: 8,
                },

                "*::-webkit-scrollbar-thumb": {
                    background: "#333842",
                    borderRadius: 8,
                },

                "*::-webkit-scrollbar-thumb:hover": {
                    background: "#555",
                },

                "::selection": {
                    background: "#8B5CF644",
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    border: "1px solid #2A2D36",
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    background: "#171923",
                    border: "1px solid #2A2D36",
                    transition: "0.25s ease",

                    "&:hover": {
                        borderColor: "#8B5CF6",
                        transform: "translateY(-2px)",
                    },
                },
            },
        },

        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },

            styleOverrides: {
                contained: {
                    borderRadius: 10,
                    paddingInline: 24,
                    paddingBlock: 10,
                },

                outlined: {
                    borderRadius: 10,
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "rgba(15,17,23,0.8)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "none",
                    borderBottom: "1px solid #2A2D36",
                },
            },
        },
    },
});

export default theme;