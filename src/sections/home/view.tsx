'use client';

import { Photo } from "@/components/photo";
import { SocialNetworks } from "@/components/social-networks";
import { useResponsive } from "@/hooks/use-response";
import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function HomeView() {

  const isSmUp = useResponsive("up", "sm");
  const isMdUp = useResponsive("up", "md");

  const [isFirstRender, setIsFirstRender] = useState(true);

  const onRenderComplete = () => {
    setIsFirstRender(false);
  };


  return (
    <>
      <Container sx={{ marginTop: '100px' }}>
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
                  variant={isMdUp ? 'h3' : 'h4'}
                >
                  Hello, I'm<br />
                  <p
                    style={{ color: '#22c55e' }}
                  >
                    Ace Gjorgjievski
                  </p>
                </Typography>
                <Typography
                  variant="body1"
                >
                  Student at the Faculty of Computer Science and Engineering,
                  highly skilled in making Web & Mobile applications, always striving
                  for new skills that will enrich the career ahead of me.
                </Typography>
              </Container>

              <Container>
              <Photo animate={isFirstRender} onRenderComplete={onRenderComplete} />
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
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {/* //todo in photo to pass how much the delay should be */}
                  <Photo animate={isFirstRender} onRenderComplete={onRenderComplete} />
                </Container>
                <Typography
                  variant="body2"
                >
                  Software Engineer
                </Typography>
                <Typography
                  sx={{ marginTop: '15px', marginBottom: '15px' }}
                  variant="h4"
                >
                  Hello, I'm<br />
                  <p
                    style={{ color: '#22c55e' }}
                  >
                    Ace Gjorgjievski
                  </p>
                </Typography>
                <Typography
                  variant="body2"
                >
                  Student at the Faculty of Computer Science and Engineering,
                  highly skilled in making Web & Mobile applications, always striving
                  for new skills that will enrich the career ahead of me.
                </Typography>
                <Container
                  sx={{ marginBottom: '40px' }}
                >
                  <SocialNetworks />
                </Container>
                
              </Container>
            </Stack>
          </>
        )}
      </Container>
    </>
  );
}
