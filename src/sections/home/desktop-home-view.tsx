import { User } from "@/types/user";
import { Photo } from "@/components/photo";
import { SocialNetworks } from "@/components/social-networks";
import { Stats } from "@/components/stats";
import { Container, Stack, Typography } from "@mui/material";

type Props = {
  user: User;
  isFirstRender: boolean;
  onRenderComplete: () => void;
  isMdUp: boolean;
};

export default function DesktopHomeView({
  user,
  isFirstRender,
  onRenderComplete,
  isMdUp,
}: Props) {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginLeft: {
            sm: '4rem'
          }
        }}
      >
        <Container
          sx={{
              marginRight: {
                sm: '0rem'
              }
          }}
        >
          <Container
            sx={{
              height: "270px",
              marginTop: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
              }}
            >
              {user.title}
            </Typography>
            <Typography
              sx={{ marginTop: "15px", marginBottom: "15px", color: "white" }}
              variant={isMdUp ? "h3" : "h4"}
            >
              Hello, I&apos;m <br />
              <Typography
                component="span"
                variant={isMdUp ? "h3" : "h4"}
                sx={{ color: "#22c55e" }}
              >
                {user.name} {user.surname}
              </Typography>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "white",
              }}
            >
              {user.description}
            </Typography>
          </Container>
          <Container>
            <SocialNetworks />
          </Container>
        </Container>

        <Container>
          <Photo animate={isFirstRender} onRenderComplete={onRenderComplete} />
        </Container>
      </Stack>
      <Stack>
        <Stats />
      </Stack>
    </>
  );
}
