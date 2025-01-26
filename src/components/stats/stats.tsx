'use client';
import Container from '@mui/material/Container';
import { stats } from './types';
import CountUp from 'react-countup';
import { Typography, Grid } from '@mui/material';


export default function Stats() {

    return (
        <>
            <Container sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                padding: '20px 10px',
                marginTop: '25px'
            }}>
                <Grid container justifyContent="center">
                    {stats.map((stat, index) => {
                        return (
                            <Grid
                                item
                                xs={6}
                                sm={6}
                                md={3}
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                        fontSize: {
                                            xs: '30px',
                                            sm: '35px',
                                            md: '35px',
                                        },
                                    }}
                                >
                                    <CountUp end={stat.value} duration={3.7} delay={2} />
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        marginTop: '8px',
                                        color: 'white',
                                        fontSize: {
                                            xs: '15px',
                                            sm: '14px',
                                            md: '14px',
                                        },
                                    }}
                                >
                                    {stat.name}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>

        </>
    )
}