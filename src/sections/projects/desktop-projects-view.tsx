import { Container, Stack, Typography } from "@mui/material";

import { useResponsive } from "@/hooks";

import { Project } from "@/types";

import Slider from "./slider";
import ProjectStack from "./project-stack";
import ProjectExternalLink from "./project-external-link";

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
            flex: "1",
            marginTop: isMdUp ? "80px" : isSmUp ? "0px" : "",
          }}
        >
          <Typography variant="h2">{activeProject.number}</Typography>
          <Typography variant="h4">{activeProject.category} project</Typography>
          <Typography variant="subtitle1">
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
