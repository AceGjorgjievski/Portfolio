import { User } from "@/types/user";
import { Photo } from "@/components/photo";
import { SocialNetworks } from "@/components/social-networks";
import { Stats } from "@/components/stats";
import { Container, Stack, Typography } from "@mui/material";
import { GitHubStats } from "@/types/github";

type Props = {
  user: User;
  isFirstRender: boolean;
  onRenderComplete: () => void;
  githubStats: GitHubStats;
};

export default function MobileHomeView({
  user,
  isFirstRender,
  onRenderComplete,
  githubStats
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
                marginLeft: '15px'
              }}
            >
              {user.title}
            </Typography>
            <Typography
              sx={{ mt: "15px", mb: "15px", color: "white" }}
              variant="h4"
            >
              Hello, I&apos;m <br />
              <Typography
                component="span"
                variant="h4"
                sx={{ color: "#22c55e" }}
              >
                {user.name} {user.surname}
              </Typography>
            </Typography>

            <Typography variant="body2">{user.description}</Typography>
          </Container>
          <Container sx={{ marginBottom: "40px" }}>
            <SocialNetworks />
          </Container>
        </Container>
      </Stack>
      <Stack>
        <Stats githubStats={githubStats}/>
      </Stack>
    </>
  );
}
