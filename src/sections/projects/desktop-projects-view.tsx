import { Container, Stack, Typography } from "@mui/material";

import { useResponsive } from "@/hooks";

import { Project } from "@/types";

import Slider from "./slider";
import ProjectStack from "./project-stack";
import ProjectExternalLink from "./project-external-link";
import useStylesProjects from "./styles";

type Props = {
  activeIndex: number;
  activeProject: Project;
  allProjects: Project[];
  handleActiveProject: (index: number) => void;
  setActiveIndex: (index: number) => void;
};

export default function DesktopProjectsView({
  activeIndex,
  activeProject,
  allProjects,
  handleActiveProject,
  setActiveIndex,
}: Props) {
  const isSmUp = useResponsive("up", "sm");
  const isMdUp = useResponsive("up", "md");
  const classes = useStylesProjects();
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        <Container
          sx={{
            marginTop: isMdUp ? "80px" : isSmUp ? "0px" : "",
          }}
          className={classes.project}
        >
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            {activeProject.number}
          </Typography>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {activeProject.category} project
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            {activeProject.description}
          </Typography>
          <ProjectStack activeProject={activeProject} />
          <hr />
          <ProjectExternalLink activeProject={activeProject} />
        </Container>

        <Slider
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setActiveProject={handleActiveProject}
          allProjects={allProjects}
          isSmUp={isSmUp}
        />
      </Container>
    </Stack>
  );
}
