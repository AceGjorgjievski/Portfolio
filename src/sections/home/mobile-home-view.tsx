import { User } from "@/auth/types";
import { Photo } from "@/components/photo";
import { SocialNetworks } from "@/components/social-networks";
import { Stats } from "@/components/stats";
import { Container, Stack, Typography } from "@mui/material";

type Props = {
  user: User;
  isFirstRender: boolean;
  onRenderComplete: () => void;
};

export default function MobileHomeView({
  user,
  isFirstRender,
  onRenderComplete,
}: Props) {
  return (
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Photo
              animate={isFirstRender}
              onRenderComplete={onRenderComplete}
            />
          </Container>
          <Container>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              {user.title}
            </Typography>
            <Typography
              sx={{ marginTop: "15px", marginBottom: "15px" }}
              variant="h4"
            >
              Hello, I&apos;m
              <br />
              <p style={{ color: "#22c55e" }}>
                {user.name} {user.surname}
              </p>
            </Typography>
            <Typography variant="body2">{user.description}</Typography>
          </Container>
          <Container sx={{ marginBottom: "40px" }}>
            <SocialNetworks />
          </Container>
        </Container>
      </Stack>
      <Stack>
        <Stats />
      </Stack>
    </>
  );
}
