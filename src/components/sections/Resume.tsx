import Section from "./Section";
import { Box, Button } from "@mui/material";
import { Header } from "../ui";
import { pdfjs } from "react-pdf";

import { useRef } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`;

export default function Resume() {

    const viewerRef = useRef<HTMLDivElement>(null);

    return (
        <Section id="resume" nextSectionId="contact" >
            <Header variant="h1" sx={{ mt: 15 }}>
                RESUME
            </Header>

            <Box
                data-lenis-prevent
                ref={viewerRef}
                sx={{
                    width: "100%",
                    maxWidth: 1800,
                    mx: "auto",
                    height: "50vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 2,
                    bgcolor: "#2b2b2b",
                    p: 2,
                    mt: 2,

                    "& .react-pdf__Page": {
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                    },

                    "& canvas": {
                        display: "block",
                        margin: "0 auto",
                    },
                }}
            >
                <Document file={`${import.meta.env.BASE_URL}resume.pdf`}>
                    <Page
                        pageNumber={1}
                        width={1000}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                </Document>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                    download="Omar_Ramadan_Resume.pdf"
                    sx={{ color: "white" }}
                >
                    Download PDF
                </Button>
            </Box>

        </Section>
    );
}