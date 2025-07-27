"use client";

import { useEffect, useState } from "react";

import { Container } from "@mui/material";

import { useResponsive } from "@/hooks/use-response";
import { getAllDocs } from "@/services/firestore";
import { Project } from "@/types";

import DesktopProjectsView from "./desktop-projects-view";
import MobileProjectsView from "./mobile-projects-view";

export default function ProjectsView() {
  const isSmUp = useResponsive("up", "sm");
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveProject = (index: number) => {
    if (projects[index]) {
      setActiveIndex(index);
      setActiveProject(projects[index]);
    }
  };

  useEffect(() => {
    if (projects.length > 0) {
      setActiveIndex(0);
      setActiveProject(projects[0]);
    }
  }, [projects]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const projectsRes = await getAllDocs("projects");
              const sortedProjects = (projectsRes as Project[]).sort(
        (a, b) => a.number - b.number
      );
        setProjects(sortedProjects as Project[]);
        if (sortedProjects.length > 0) {
          console.log(projectsRes);
          setActiveProject(projectsRes[0] as Project);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <Container sx={{ marginTop: "100px" }}>
      {activeProject &&
        (isSmUp ? (
          <DesktopProjectsView
          activeIndex={activeIndex}
            activeProject={activeProject}
            allProjects={projects}
            handleActiveProject={handleActiveProject}
            setActiveIndex={setActiveIndex}
          />
        ) : (
          <MobileProjectsView
          activeIndex={activeIndex}

            activeProject={activeProject}
            allProjects={projects}
            handleActiveProject={handleActiveProject}
            setActiveIndex={setActiveIndex}

          />
        ))}
    </Container>
  );
}
