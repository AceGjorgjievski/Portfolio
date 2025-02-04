'use client';

import { useResponsive } from "@/hooks/use-response";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { experience, skills, aboutMe, education } from "./resume-data";
import { useState } from "react";
import Image from "next/image";

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
                                                    {selectedId === 'experience' && (
                                                        <>
                                                            My Experience
                                                        </>
                                                    )}

                                                    {selectedId === 'skills' && (
                                                        <>
                                                            My Skills
                                                        </>
                                                    )}

                                                    {selectedId === 'education' && (
                                                        <>
                                                            My Education
                                                        </>
                                                    )}
                                                    {selectedId === 'about Me' && (
                                                        <>
                                                            About Me
                                                        </>
                                                    )}

                                                </Typography>
                                            </Container>
                                            <Container
                                                sx={{
                                                    height: '320px',
                                                    overflowY: 'auto',
                                                }}
                                            >
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
                                                    <>
                                                        <Grid
                                                            container
                                                            spacing={2}
                                                            sx={{
                                                                width: '100%',
                                                            }}
                                                        >
                                                            {skills.skillList.map((skill, index) => (
                                                                <Grid
                                                                    item
                                                                    xs={12} sm={12} md={12} lg={6}
                                                                    key={index}
                                                                    sx={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                    }}
                                                                >
                                                                    <Paper
                                                                        elevation={3}
                                                                        sx={{
                                                                            padding: 4,
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
                                                                        <Image
                                                                            src={skill.icon}
                                                                            alt={skill.name}
                                                                            width={0}
                                                                            height={0}
                                                                            style={{
                                                                                width: isSmUp ? "70px" : "50px",
                                                                                height: isSmUp ? "70px" : "50px"
                                                                            }}
                                                                        />
                                                                    </Paper>
                                                                </Grid>
                                                            ))}
                                                        </Grid>
                                                    </>
                                                )}

                                                {selectedId === 'education' && (
                                                    <>
                                                        <Grid
                                                            container
                                                            spacing={2}
                                                            sx={{
                                                                width: '100%',
                                                            }}
                                                        >
                                                            {education.items.map((item, index) => (
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
                                                                                    md: '20px',
                                                                                    lg: '17px'
                                                                                }
                                                                            }}>
                                                                            {item.institution}
                                                                        </Typography>
                                                                        <Typography
                                                                            variant="body1"
                                                                            sx={{
                                                                                color: 'cyan',
                                                                                fontSize: {
                                                                                    sm: '15px',
                                                                                    md: '17px',
                                                                                    lg: '12px'
                                                                                }
                                                                            }}>
                                                                            {item.degree}
                                                                        </Typography>
                                                                    </Paper>
                                                                </Grid>
                                                            ))}
                                                        </Grid>
                                                    </>
                                                )}

                                                {selectedId === 'about Me' && (
                                                    <>
                                                        <Stack
                                                            direction="column"
                                                            sx={{
                                                                width: {
                                                                    sm: '320px',
                                                                    md: '470px',
                                                                    lg: '450px'
                                                                },
                                                                overflowX: 'hidden'
                                                            }}
                                                        >
                                                            {aboutMe.info.map((item, index) => (
                                                                <Grid
                                                                    container
                                                                    key={index}
                                                                    spacing={2}
                                                                    sx={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        padding: '8px 0',
                                                                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                                                                        overflow: 'hidden',
                                                                        flexWrap: 'nowrap'
                                                                    }}
                                                                >
                                                                    <Grid
                                                                        item
                                                                        xs={5}
                                                                        sx={{
                                                                            textAlign: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            variant="h6"
                                                                            sx={{
                                                                                color: '#22c55e',
                                                                                fontWeight: 'bold',
                                                                                fontSize: {
                                                                                    sm: '17px',
                                                                                    md: '17px',
                                                                                    lg: '20px'
                                                                                }
                                                                            }}
                                                                        >
                                                                            {item.fieldName}
                                                                        </Typography>
                                                                    </Grid>

                                                                    <Grid
                                                                        item
                                                                        xs={7}
                                                                        sx={{
                                                                            textAlign: 'left',
                                                                            wordBreak: 'break-word',
                                                                            overflow: 'hidden',
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            variant="body1"
                                                                            sx={{
                                                                                color: 'cyan',
                                                                                fontSize: {
                                                                                    xs: '11px',
                                                                                    sm: '12px',
                                                                                    md: '15px',
                                                                                    lg: '16px'
                                                                                },
                                                                                wordWrap: 'break-word',
                                                                                whiteSpace: 'normal'
                                                                            }}
                                                                        >
                                                                            {item.fieldValue}
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            ))}
                                                        </Stack>
                                                    </>
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
