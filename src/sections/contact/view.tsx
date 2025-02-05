'use client';

import { useResponsive } from "@/hooks/use-response";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";


export default function ContactView() {
    const isSmUp = useResponsive("up", "sm");

    return (
        <>
            <Container
                sx={{
                    marginTop: '70px'
                }}
            >
                {
                    (isSmUp ? (
                        <>
                            <Container>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        padding: 3,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: '#25252e',
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ color: 'cyan', marginBottom: 2 }}>
                                        Let's work together
                                    </Typography>
                                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
                                        <TextField
                                            label="Your Name"
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                marginBottom: 2,
                                                backgroundColor: '#1c1c22',
                                                borderRadius: 1,
                                                '& .MuiInputLabel-root': { color: 'cyan' }, // Label color
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': { borderColor: 'cyan' }, // Border color
                                                    '&:hover fieldset': { borderColor: 'cyan' }, // Hover effect
                                                    '&.Mui-focused fieldset': { borderColor: 'cyan' }, // Focus color
                                                }
                                            }}
                                            InputLabelProps={{
                                                style: { color: 'cyan' }
                                            }}
                                        />
                                        <TextField
                                            label="Your Email"
                                            type="email"
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                marginBottom: 2,
                                                backgroundColor: '#1c1c22',
                                                borderRadius: 1,
                                                '& .MuiInputLabel-root': { color: 'cyan' }, // Label color
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': { borderColor: 'cyan' }, // Border color
                                                    '&:hover fieldset': { borderColor: 'cyan' }, // Hover effect
                                                    '&.Mui-focused fieldset': { borderColor: 'cyan' }, // Focus color
                                                }
                                            }}
                                            InputLabelProps={{
                                                style: { color: 'cyan' }
                                            }}
                                        />
                                        <TextField
                                            label="Message"
                                            variant="outlined"
                                            multiline
                                            rows={3}
                                            fullWidth
                                            sx={{
                                                marginBottom: 2,
                                                backgroundColor: '#1c1c22',
                                                borderRadius: 1,
                                                '& .MuiInputLabel-root': { color: 'cyan' }, // Label color
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': { borderColor: 'cyan' }, // Border color
                                                    '&:hover fieldset': { borderColor: 'cyan' }, // Hover effect
                                                    '&.Mui-focused fieldset': { borderColor: 'cyan' }, // Focus color
                                                }
                                            }}
                                            InputLabelProps={{
                                                style: { color: 'cyan' }
                                            }}
                                        />
                                        <Button variant="contained" sx={{backgroundColor: 'cyan'}}>
                                            <Typography
                                                sx={{
                                                    color: 'black'
                                                }}
                                            >
                                                Send Message
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Paper>
                            </Container>
                        </>
                    ) : (
                        <>
                            <Container>
                                mobile
                            </Container>
                        </>
                    ))
                }
            </Container>
        </>
    );
}