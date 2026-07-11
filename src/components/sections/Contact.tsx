import Section from "./Section";
import {
    Box,
    Link,
    Stack as MuiStack,
    Typography,
    SxProps,
} from "@mui/material";
import { Header } from "../ui";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface ContactProps {
    sx?: SxProps;
}

export default function Contact({ sx }: ContactProps) {
    return (
        <Section id="contact" sx={sx}>
            <Header variant="h1">
                CONTACT
            </Header>

            <MuiStack
                spacing={3}
                sx={{
                    mt: 5,
                    width: "100%",
                    maxWidth: 700,
                    mx: "auto",
                }}
            >
                <MuiStack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <MdEmail size={24} />
                    <Typography sx={{ fontWeight: 600 }}>Email:</Typography>
                    <Link
                        href="mailto:oramadan2001@gmail.com"
                        underline="hover"
                        color="inherit"
                    >
                        oramadan2001@gmail.com
                    </Link>
                </MuiStack>

                <MuiStack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <FaLinkedin size={22} />
                    <Typography sx={{ fontWeight: 600 }}>LinkedIn:</Typography>
                    <Link
                        href="https://www.linkedin.com/in/omar-ramadan-3822b7179"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                    >
                        linkedin.com/in/omar-ramadan-3822b7179
                    </Link>
                </MuiStack>

                <MuiStack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <FaGithub size={22} />
                    <Typography sx={{ fontWeight: 600 }}>GitHub:</Typography>
                    <Link
                        href="https://github.com/oramadan-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                    >
                        github.com/oramadan-dev
                    </Link>
                </MuiStack>
            </MuiStack>
        </Section>
    );
}