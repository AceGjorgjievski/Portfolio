'use client';

import { useResponsive } from "@/hooks/use-response";
import { Container, Stack } from "@mui/material";

export default function ResumeView() {

    const isSmUp = useResponsive("up", "sm");
    const isMdUp = useResponsive("up", "md");

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
                                        123 - m
                                    </Container>
                                    <Container
                                        sx={{
                                            padding: '20px',
                                            borderRadius: '8px',
                                            color: 'white',
                                        }}
                                    >
                                        456 - m
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
