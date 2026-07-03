import Section from "./Section";
import {Box, Typography} from "@mui/material";

export default function Resume() {

    return (
        <Section id="resume" nextSectionId="contact">

            <Typography variant='h1' >
                RESUME
            </Typography>

            <Typography variant="h6" sx={{ ml: 1 }}>
                This is a placeholder
            </Typography>


            <Box sx={{ width: '100%', maxWidth: '30vw', minWidth: 500, ml: 1, mt: 3 }}>
                <Typography variant="body1" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Box>

        </Section>
    );


}