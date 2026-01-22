"use client";

import { useResponsive } from "@/hooks";
import { Container } from "@mui/material";

import { useEffect, useState } from "react";
import { getAllDocs } from "@/services/firestore";
import DesktopResumeView from "./desktop-resume-view";
import MobileResumeView from "./mobile-resume-view";
import { Education, Experience, Skill } from "@/types";
import ExperienceModalView from "./experience-modal-view";

type SectionKey = "experience" | "skills" | "education";

export default function ResumeView() {
  const isSmUp = useResponsive("up", "sm");

  const [selectedId, setSelectedId] = useState<SectionKey>("experience");
  const [experience, setExperience] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [education, setEducation] = useState<Education[]>([]);

  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleExperienceModalOpen = (experience: Experience) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedExperience(null);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [experienceRes, skillsRes, educationRes] = await Promise.all([
          getAllDocs("experience"),
          getAllDocs("skills"),
          getAllDocs("education"),
        ]);

        const experienceResSorted = (experienceRes as Experience[]).sort(
          (a, b) =>
            b.endDate.toDate().getTime() - a.startDate.toDate().getTime(),
        );

        setExperience(experienceResSorted as Experience[]);
        setSkills(skillsRes as Skill[]);
        setEducation(educationRes as Education[]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <>
      <Container
        sx={{
          marginTop: isSmUp ? "70px" : "20px",
        }}
      >
        {isSmUp ? (
          <>
            <DesktopResumeView
              experience={experience}
              skills={skills}
              education={education}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
              handleExperienceModalOpen={handleExperienceModalOpen}
            />
          </>
        ) : (
          <>
            <MobileResumeView
              experience={experience}
              skills={skills}
              education={education}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
              handleExperienceModalOpen={handleExperienceModalOpen}
            />
          </>
        )}
        <ExperienceModalView
          selectedExpecience={selectedExperience}
          modalOpen={modalOpen}
          handleClose={handleCloseModal}
        />
      </Container>
    </>
  );
}
