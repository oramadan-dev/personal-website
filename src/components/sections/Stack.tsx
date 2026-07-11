import Section from './Section';
import {
    Box, Divider,
    Typography,
} from '@mui/material';
import { Header } from '../ui';
import { FaDatabase, FaJava } from 'react-icons/fa';
import {
    SiDocker,
    SiGit,
    SiGithub,
    SiGradle,
    SiHibernate,
    SiMui,
    SiOpenapiinitiative,
    SiPostgresql,
    SiPostman,
    SiReact,
    SiSpringboot,
    SiTypescript,
    SiVite,
    SiC, SiGitlab, SiJenkins, SiKubernetes, SiIntellijidea
} from "react-icons/si";
import TechItem from "../ui/TechItem";
import { Tech } from "../../types/Tech";

const STACK: Record<string, Tech[]> = {
    Languages: [
        { name: 'Java/Scala/Groovy', icon: <FaJava /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'C', icon: <SiC /> },
    ],

    Backend: [
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'Hibernate', icon: <SiHibernate /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Gradle', icon: <SiGradle /> },
        { name: 'REST APIs', icon: <SiOpenapiinitiative /> },
    ],

    Frontend: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Material UI', icon: <SiMui /> },
        { name: 'Vite', icon: <SiVite /> },
    ],

    Tools: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'IntelliJ', icon: <SiIntellijidea /> }
    ],

    Infrastructure: [
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'GitLab CI/CD', icon: <SiGitlab /> },
        { name: 'Jenkins', icon: <SiJenkins /> },
    ]
};

export default function Stack() {
    return (
        <Section id="stack" nextSectionId="resume">
            <Header variant="h1">STACK</Header>

            <Box
                sx={{
                    mt: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    width: '100%',
                    maxWidth: 1300,
                    mx: 'auto'
                }}
            >
                {Object.entries(STACK).map(([category, tech]) => (
                    <Box
                        key={category}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '220px 1fr',
                            gap: 25,
                            alignItems: 'start',
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                color: 'text.primary',
                                letterSpacing: 2,
                            }}
                        >
                            {category.toUpperCase()}
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 3,
                            }}
                        >
                            {tech.map((t) => (
                                <TechItem key={t.name} tech={t} />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Section>
    );
}