'use client';

import { Container, Stack, Typography } from "@mui/material";
import { useResponsive } from "@/hooks/use-response";
import { useState } from "react";
import { projects } from "@/sections/projects/projects";
import ProjectExternalLink from "./project-external-link";
import ProjectStack from "./project-stack";
import Slider from "./slider";

export default function ProjectsView() {

    const isSmUp = useResponsive("up", "sm");
    const isMdUp = useResponsive("up", "md");
    const [project, setProject] = useState(projects[0])

    const setActiveProject = (index: number) => {
        setProject(projects[index]);
    }

    return (
        <>
            <Container
                sx={{ marginTop: '100px' }}
            >
                {
                    (isSmUp) ? (
                        <>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Container
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        gap: '20px',
                                    }}
                                >
                                    <Container
                                        sx={{
                                            flex: '1',
                                            marginTop: (isMdUp ? '80px' : isSmUp ? '0px' : ''),
                                            // marginTop: '80px',
                                        }}
                                    >
                                        <Typography
                                            variant="h2"
                                        >
                                            {project.number}
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                        >
                                            {project.category} project
                                        </Typography>
                                        <p>
                                            {project.desciption}
                                        </p>
                                        <ProjectStack project={project} />
                                        <hr />
                                        <ProjectExternalLink project={project} />
                                    </Container>

                                    <Container
                                        sx={{
                                            flex: '1',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Slider setActiveProject={setActiveProject} isSmUp={isSmUp} />
                                    </Container>
                                </Container>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Stack
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Container>
                                    <Container
                                        sx={{
                                            textAlign: 'center',
                                            padding: '20px',
                                            borderRadius: '8px',
                                            color: 'white',
                                            marginBottom: '40px'
                                        }}
                                    >
                                        <Slider setActiveProject={setActiveProject} isSmUp={isSmUp} />
                                    </Container>
                                    <Container
                                        sx={{
                                            padding: '20px',
                                            borderRadius: '8px',
                                            color: 'white',
                                        }}
                                    >
                                        <Typography
                                            variant="h2"
                                        >
                                            {project.number}
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                my: '10px'
                                            }}
                                        >
                                            {project.category} project
                                        </Typography>
                                        <p>
                                            {project.desciption}
                                        </p>
                                        <ProjectStack project={project} />
                                        <hr />
                                        <ProjectExternalLink project={project} />
                                    </Container>
                                </Container>
                            </Stack>
                        </>
                    )
                }
            </Container>
        </>
    );
}
