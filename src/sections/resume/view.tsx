'use client';

import { useResponsive } from "@/hooks/use-response";
import { Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { experience, skills, aboutMe, education } from "./resume-data";
import { useState } from "react";

export default function ResumeView() {

    const isSmUp = useResponsive("up", "sm");

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
                    marginTop: '70px'
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
                                    }}
                                >
                                    <Container
                                        sx={{
                                            flex: '1',
                                            padding: '20px',
                                            textAlign: 'center',
                                            minWidth: { xs: '180px', sm: '200px', md: '300px', lg: '400px' },
                                            maxWidth: { xs: '200px', sm: '300px', md: '400px', lg: '400px' },
                                        }}
                                    >
                                        <Grid 
                                            container 
                                            justifyContent="center" 
                                            spacing={3} 
                                            sx={{ 
                                                padding: '10px',
                                            }}
                                        >
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
                                                        my: '10px',
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
                                            flex: '1',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            minWidth: { xs: '180px', sm: '200px', md: '400px', lg: '500px' },
                                            maxWidth: { xs: '200px', sm: '400px', md: '500px', lg: '600px' },
                                        }}
                                    >
                                        <Stack
                                            direction="column"
                                            spacing={2}
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Container
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start',
                                                    maxWidth: '350px'
                                                }}
                                            >
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        fontSize: {
                                                            sm: '19px',
                                                            md: '25px'
                                                        }
                                                    }}
                                                >
                                                    My Experience
                                                </Typography>
                                            </Container>
                                            <Container>
                                                {selectedId === 'experience' && (
                                                    <>
                                                        <Grid 
                                                            container 
                                                            spacing={2} 
                                                            sx={{ 
                                                                width: '100%', 
                                                            }}
                                                        >
                                                            {experience.items.map((item, index) => (
                                                                <Grid
                                                                    item
                                                                    xs={12} sm={12} md={12} lg={6}
                                                                    key={index}
                                                                    sx={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center'
                                                                    }}
                                                                >
                                                                    <Paper
                                                                        elevation={3}
                                                                        sx={{
                                                                            padding: 2,
                                                                            width: '100%',
                                                                            maxWidth: '300px',
                                                                            height: '100%',
                                                                            maxHeight: '150px',
                                                                            backgroundColor: '#25252e',
                                                                            color: 'white',
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            textAlign: 'center',
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            variant="body2"
                                                                            sx={{
                                                                                color: 'cyan',
                                                                                fontSize: '12px'
                                                                            }}>
                                                                            {item.duration}
                                                                        </Typography>
                                                                        <Typography
                                                                            variant="h6"
                                                                            sx={{
                                                                                color: '#22c55e',
                                                                                fontWeight: 'bold',
                                                                                fontSize: {
                                                                                    sm: '17px',
                                                                                    md: '20px'
                                                                                }
                                                                            }}>
                                                                            {item.company}
                                                                        </Typography>
                                                                        <Typography
                                                                            variant="body1"
                                                                            sx={{
                                                                                color: 'cyan',
                                                                                fontSize: {
                                                                                    sm: '15px',
                                                                                    md: '17px'
                                                                                }
                                                                            }}>
                                                                            {item.position}
                                                                        </Typography>
                                                                    </Paper>
                                                                </Grid>
                                                            ))}
                                                        </Grid>
                                                    </>
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
                                        </Stack>
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
                                            marginLeft: '12px'
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
