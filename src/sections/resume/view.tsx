'use client';

import { useResponsive } from "@/hooks/use-response";
import { Container, Grid, Stack } from "@mui/material";

import { experience, skills, aboutMe, education } from "./resume-data";
import { useState } from "react";

export default function ResumeView() {

    const isSmUp = useResponsive("up", "sm");
    const isMdUp = useResponsive("up", "md");

    const [selectedId, setSelectedId] = useState<string>('experience');

    const resumeDataMap = {
        experience: experience,
        skills: skills,
        aboutMe: aboutMe,
        education: education
    }

    const selectedResumeData = resumeDataMap[selectedId];

    return (
        <>
            <Container
                sx={{
                    marginTop: '100px'
                }}
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
                                        }}
                                    >

                                        123 - w
                                    </Container>
                                    <Container
                                        sx={{
                                            flex: '1',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        456 - w
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
                                sx={{
                                    border: '2px solid #22c55e',
                                    width: '100%', // Ensures proper alignment
                                    padding: '20px', 
                                }}
                            >
                                <Container
                                    sx={{
                                        border: '2px solid #22c55e',
                                        padding: '20px'
                                    }}
                                >
                                    <Container
                                        sx={{
                                            textAlign: 'center',
                                            padding: '20px',
                                            borderRadius: '8px',
                                            color: 'white',
                                            marginBottom: '40px',
                                        }}
                                    >
                                        <Grid container justifyContent="center" spacing={3}>
                                            {['experience', 'skills', 'education', 'about Me'].map((item) => (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    key={item}
                                                    onClick={() => setSelectedId(item)}
                                                    sx={{
                                                        border: '2px solid #22c55e',
                                                        padding: '15px',
                                                        cursor: 'pointer',
                                                        backgroundColor: selectedId === item ? 'green' : '',
                                                        borderRadius: '8px',
                                                        my: '12px',
                                                        '&:hover': {
                                                            backgroundColor: 'green',
                                                            color: 'white',
                                                            transition: '0.3s',
                                                        },
                                                    }}
                                                >
                                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Container>
                                    <Container
                                        sx={{
                                            textAlign: 'center',
                                            padding: '20px',
                                            borderRadius: '8px',
                                            border: '2px solid #22c55e',
                                            color: 'white',
                                        }}
                                    >
                                        {selectedId === 'experience' && (
                                            <ul>
                                                {experience.items.map((item, index) => (
                                                    <li key={index}>
                                                        <strong>{item.company}</strong> - {item.position} <br />
                                                        {item.responsibility} <br />
                                                        {item.duration}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {selectedId === 'skills' && (
                                            <ul>
                                                {skills.skillList.map((skill, index) => (
                                                    <li key={index}>
                                                        {skill.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {selectedId === 'education' && (
                                            <ul>
                                                {education.items.map((education, index) => (
                                                    <li key={index}>
                                                        <strong>{education.institution}</strong> - {education.major} <br />
                                                        {education.duration} <br />
                                                        {education.degree}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {selectedId === 'about Me' && (
                                            <ul>
                                                {aboutMe.info.map((item, index) => (
                                                    <li key={index}>
                                                        <strong>{item.fieldName}:</strong> {item.fieldValue}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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
