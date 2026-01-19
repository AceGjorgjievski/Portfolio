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
  isMdUp: boolean;
  githubStats: GitHubStats;
};

export default function DesktopHomeView({
  user,
  isFirstRender,
  onRenderComplete,
  isMdUp,
  githubStats,
}: Props) {
  
  const renderUserInfo = (
    <Container
      sx={{
        marginRight: {
          sm: "0rem",
        },
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
  );

  const renderProfilePicture = (
    <Container>
      <Photo
        animate={isFirstRender}
        profilePicture={user?.profilePicture}
        onRenderComplete={onRenderComplete}
      />
    </Container>
  );

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginLeft: {
            sm: "4rem",
          },
        }}
      >
        {renderUserInfo}

        {renderProfilePicture}
      </Stack>
      <Stack>
        <Stats githubStats={githubStats} />
      </Stack>
    </>
  );
}
