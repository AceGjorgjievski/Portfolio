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

export default function MobileResumeView({
  experience,
  skills,
  education,
  setSelectedId,
  selectedId,
  handleExperienceModalOpen,
}: Props) {
  const classes = useStylesResume();

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

  const renderExperience = (experience: Experience[]) => (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
      }}
    >
      {experience.map((item, index) => (
        <Grid
          item
          xs={12}
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
            onClick={() => handleExperienceModalOpen(item)}
            sx={{
              padding: 2,
              height: "100%",
              maxHeight: "150px",
              cursor: "pointer",
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
                  sm: "17px",
                  md: "20px",
                },
              }}
            >
              {item.company}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "cyan",
                fontSize: {
                  sm: "15px",
                  md: "17px",
                },
              }}
            >
              {item.position}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  const renderSkills = (skills: Skill[]) => (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
      }}
    >
      {[...skills]
        .sort((a, b) => a.number - b.number)
        .map((skill, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                height: "100%",
                maxHeight: "150px",
              }}
              className={classes.paper}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={0}
                height={0}
                style={{
                  width: "3.125rem",
                  height: "3.125rem",
                  transition: "0.3s ease-in-out",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  mt: 1,
                  fontSize: "14px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  color: "white",
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
        }}
      >
        {education.map((item, index) => (
          <Grid
            item
            xs={12}
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
                  fontSize: {
                    xs: "12px",
                  },
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
                    xs: "14px",
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
                    xs: "12px",
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

  const renderMap: Record<SectionKey, () => JSX.Element> = {
    experience: () => renderExperience(experience),
    skills: () => renderSkills(skills),
    education: () => renderEducation(education),
  };

  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
        }}
      >
        <Container
          sx={{
            padding: "20px",
          }}
        >
          <Container
            sx={{
              textAlign: "center",
              padding: "20px",
              borderRadius: "8px",
              color: "white",
              marginBottom: "40px",
              marginLeft: "12px",
            }}
          >
            {renderSectionSelector(selectedId)}
          </Container>
          <Container
            sx={{
              textAlign: "center",
              padding: "20px",
              borderRadius: "8px",
              color: "white",
              height: "320px",
              overflowY: "auto",
            }}
          >
            {renderMap[selectedId]()}
          </Container>
        </Container>
      </Stack>
    </>
  );
}
