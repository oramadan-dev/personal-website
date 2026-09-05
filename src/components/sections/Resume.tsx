import Section from "./Section";
import { Box, Button } from "@mui/material";
import { Header } from "../ui";
import { pdfjs } from "react-pdf";

import { useEffect, useRef, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`;

export default function Resume() {

    const viewerRef = useRef<HTMLDivElement>(null);
    const [pageWidth, setPageWidth] = useState(1000);

    useEffect(() => {
        const viewer = viewerRef.current;
        if (!viewer) return;

        const updateWidth = () => {
            setPageWidth(Math.max(260, Math.min(viewer.clientWidth - 32, 1000)));
        };

        updateWidth();

        const resizeObserver = new ResizeObserver(updateWidth);
        resizeObserver.observe(viewer);

        return () => resizeObserver.disconnect();
    }, []);

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
                    maxWidth: { xs: "100%", lg: 1100 },
                    mx: "auto",
                    height: { xs: "60vh", md: "50vh" },
                    overflowY: "auto",
                    overflowX: "auto",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 2,
                    bgcolor: "#2b2b2b",
                    p: { xs: 1, sm: 2 },
                    mt: 2,

                    "& .react-pdf__Page": {
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                    },

                    "& canvas": {
                        display: "block",
                        margin: "0 auto",
                        maxWidth: "100%",
                        height: "auto !important",
                    },
                }}
            >
                <Document file={`${import.meta.env.BASE_URL}resume.pdf`}>
                    <Page
                        pageNumber={1}
                        width={pageWidth}
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
