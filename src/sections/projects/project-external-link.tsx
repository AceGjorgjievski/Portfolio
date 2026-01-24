import { Container, IconButton, Link, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

import { Project } from "@/types";

import BitbucketIcon from "@/assets/icons/bitbucket-icon";
import useStylesProjects from "./styles";

type Props = {
  activeProject: Project;
};

export default function ProjectExternalLink({ activeProject }: Props) {
  const classes = useStylesProjects();

  if (!activeProject.links?.web?.length) return null;

  return (
    <Container
      sx={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {activeProject.links.web.map((url, index) => {
        const isGitHub = url.includes("github.com");
        const isBitBucket = url.includes("bitbucket.org");

        const icon = isGitHub ? (
          <GitHubIcon />
        ) : isBitBucket ? (
          <BitbucketIcon />
        ) : (
          <OpenInBrowserIcon />
        );

        const tooltipTitle = isGitHub
          ? "GitHub Repo"
          : isBitBucket
            ? "Bitbucket Repo"
            : "Live Demo";

        return (
          <Link
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tooltip title={tooltipTitle} leaveDelay={150}>
              <IconButton
                sx={{
                  color: "#22c55e",
                }}
                className={classes.externalLinks}
              >
                {icon}
              </IconButton>
            </Tooltip>
          </Link>
        );
      })}
    </Container>
  );
}
