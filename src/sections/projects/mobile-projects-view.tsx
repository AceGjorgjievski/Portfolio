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

export default function MobileProjectsView({
  activeIndex,
  activeProject,
  allProjects,
  handleActiveProject,
  setActiveIndex,
}: Props) {
  const isSmUp = useResponsive("up", "sm");
  const classes = useStylesProjects();

  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Container
          sx={{
            textAlign: "center",
            padding: "20px",
            borderRadius: "8px",
            color: "white",
            marginBottom: "60px",
          }}
        >
          <Slider
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setActiveProject={handleActiveProject}
            allProjects={allProjects}
            isSmUp={isSmUp}
          />
        </Container>
        <Container className={classes.projectMobile}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            {activeProject.number}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              my: "10px",
              textAlign: "center",
            }}
          >
            {activeProject.category} project
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, textAlign: "center" }}>
            {activeProject.description}
          </Typography>
          <ProjectStack activeProject={activeProject} />
          <hr />
          <ProjectExternalLink activeProject={activeProject} />
        </Container>
      </Container>
    </Stack>
  );
}
