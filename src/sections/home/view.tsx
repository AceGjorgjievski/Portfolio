'use client';

import { SocialNetworks } from "@/components/social-networks";
import { useResponsive } from "@/hooks/use-response";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function HomeView() {

  const isSmUp = useResponsive("up", "sm");


  return (
    <>
      <Container sx={{ marginTop: '70px' }}>
        {(isSmUp) ? (
          <>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Container>
                <Typography
                  variant="h6"
                >
                  Software Engineer
                </Typography>
                <Typography
                  sx={{ marginTop: '15px', marginBottom: '15px' }}
                  variant="h3"
                >
                  Hello, I'm<br />
                  <p
                    style={{ color: '#22c55e' }}
                  >
                    Ace Gjorgjievski
                  </p>
                </Typography>
                <Typography
                  variant="h6"
                >
                  Student at the Faculty of Computer Science and Engineering, <br />
                  highly skilled in making Web & Mobile applications,<br /> always striving
                  for new skills that will enrich the career ahead of me.
                </Typography>
              </Container>

              <div>photo</div>
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
                <Typography
                  variant="h6"
                >
                  Software Engineer
                </Typography>
                <Typography
                  sx={{ marginTop: '15px', marginBottom: '15px' }}
                  variant="h3"
                >
                  Hello, I'm<br />
                  <p
                    style={{ color: '#22c55e' }}
                  >
                    Ace Gjorgjievski
                  </p>
                </Typography>
                <Typography
                  variant="h6"
                >
                  Student at the Faculty of Computer Science and Engineering, <br />
                  highly skilled in making Web & Mobile applications,<br /> always striving
                  for new skills that will enrich the career ahead of me.
                </Typography>
              </Container>
              <div>photo</div>
            </Stack>
          </>
        )}
        <Container>
          <SocialNetworks/>
        </Container>
      </Container>
    </>
  );
}
