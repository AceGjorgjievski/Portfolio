import { JSX } from "react";

import Image from "next/image";

import { Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { Education } from "@/types/education";
import { Experience } from "@/types/experience";
import { Skill } from "@/types/skill";
import useStylesResume from "./styles";

type SectionKey = "experience" | "skills" | "education";

const SECTION_KEYS: SectionKey[] = ["experience", "skills", "education"];

const SECTION_LABELS: Record<SectionKey, string> = {
  experience: "Experience",
  skills: "Skills",
  education: "Education",
};

type Props = {
  experience: Experience[];
  skills: Skill[];
  education: Education[];
  setSelectedId: (id: SectionKey) => void;
  selectedId: SectionKey;
  handleExperienceModalOpen: (experience: Experience) => void;
};

export default function DesktopResumeView({
  experience,
  skills,
  education,
  setSelectedId,
  selectedId,
  handleExperienceModalOpen,
}: Props) {
  const classes = useStylesResume();
  const selectedIdTitle =
    selectedId === "experience"
      ? "My Experience"
      : selectedId === "skills"
        ? "My Skills"
        : selectedId === "education"
          ? "My Education"
          : "My Events";

  const renderExperience = (experience: Experience[]) => (
    <Grid container spacing={2} sx={{ width: "100%", marginTop: "2px" }}>
      {experience.map((item, index) => (
        <Grid
          item
          sm={12}
          md={12}
          lg={6}
          key={index}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            elevation={3}
            onClick={() => handleExperienceModalOpen(item)}
            sx={{
              padding: 2,
              width: "100%",
              maxWidth: "300px",
              height: "8.75rem",
              cursor: "pointer",
            }}
            className={classes.paper}
          >
            <Typography
              variant="body2"
              sx={{ color: "cyan", fontSize: "12px" }}
            >
              {item.duration}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#22c55e",
                fontWeight: "bold",
                fontSize: { sm: "17px", md: "20px" },
              }}
            >
              {item.company}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "cyan", fontSize: { sm: "15px", md: "17px" } }}
            >
              {item.position}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  const renderSkills = (skills: Skill[]) => (
    <Grid container spacing={2} sx={{ width: "100%", marginTop: "2px" }}>
      {[...skills]
        .sort((a, b) => a.number - b.number)
        .map((skill, index) => (
          <Grid
            item
            sm={12}
            md={12}
            lg={6}
            key={skill.id || index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Paper
              elevation={3}
              sx={{
                position: "relative",
                padding: 4,
                maxHeight: "150px",
                "&:hover .hover-text": {
                  opacity: 1,
                },
              }}
              className={classes.paper}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={0}
                height={0}
                style={{
                  width: "4.375rem",
                  height: "4.375rem",
                  transition: "0.3s ease-in-out",
                }}
              />
              <Typography
                className="hover-text"
                variant="subtitle1"
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  pointerEvents: "none",
                }}
              >
                {skill.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );

  const renderEducation = (education: Education[]) => {
    return (
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          marginTop: "2px",
        }}
      >
        {education.map((item, index) => (
          <Grid
            item
            sm={12}
            md={12}
            lg={6}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                height: "100%",
                maxHeight: "150px",
              }}
              className={classes.paper}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "cyan",
                  fontSize: "12px",
                }}
              >
                {item.duration}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#22c55e",
                  fontWeight: "bold",
                  fontSize: {
                    sm: "12px",
                    md: "18px",
                    lg: "14px",
                  },
                }}
              >
                {item.institution}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "cyan",
                  fontSize: {
                    sm: "15px",
                    md: "17px",
                    lg: "12px",
                  },
                }}
              >
                {item.degree}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderSectionSelector = (selectedId: SectionKey) => (
    <Grid
      container
      justifyContent="center"
      spacing={3}
      sx={{ padding: "10px" }}
    >
      {SECTION_KEYS.map((item) => (
        <Grid
          item
          xs={12}
          key={item}
          onClick={() => setSelectedId(item)}
          sx={{
            backgroundColor: selectedId === item ? "green" : "",
            my: "10px",
          }}
          className={classes.sectionTitle}
        >
          <Typography
            sx={{
              my: "1px",
            }}
          >
            {SECTION_LABELS[item]}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );

  const renderMap: Record<SectionKey, () => JSX.Element> = {
    experience: () => renderExperience(experience),
    skills: () => renderSkills(skills),
    education: () => renderEducation(education),
  };

  return (
    <>
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
          }}
        >
          <Container
            sx={{
              flex: "1",
              padding: "20px",
              textAlign: "center",
              minWidth: { sm: "200px", md: "300px", lg: "400px" },
              maxWidth: { sm: "300px", md: "400px", lg: "400px" },
            }}
          >
            {renderSectionSelector(selectedId)}
          </Container>
          <Container
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: { sm: "200px", md: "400px", lg: "500px" },
              maxWidth: { sm: "400px", md: "500px", lg: "600px" },
            }}
          >
            <Stack
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  maxWidth: "350px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      sm: "19px",
                      md: "25px",
                    },
                  }}
                >
                  {selectedIdTitle}
                </Typography>
              </Container>
              <Container
                sx={{
                  height: "320px",
                  overflowY: "auto",
                }}
              >
                {renderMap[selectedId]()}
              </Container>
            </Stack>
          </Container>
        </Container>
      </Stack>
    </>
  );
}
