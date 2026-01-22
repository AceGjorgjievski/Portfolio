import { JSX } from "react";

import Image from "next/image";

import { Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { Education } from "@/types/education";
import { Experience } from "@/types/experience";
import { Skill } from "@/types/skill";

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
};

export default function MobileResumeView({
  experience,
  skills,
  education,
  setSelectedId,
  selectedId,
}: Props) {
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
            border: "2px solid #22c55e",
            padding: "15px",
            cursor: "pointer",
            backgroundColor: selectedId === item ? "green" : "",
            borderRadius: "8px",
            my: "10px",
            "&:hover": {
              backgroundColor: "green",
              color: "white",
              transition: "0.3s",
            },
          }}
        >
          {SECTION_LABELS[item]}
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
            sx={{
              padding: 2,
              width: "100%",
              maxWidth: "300px",
              height: "100%",
              maxHeight: "150px",
              backgroundColor: "#25252e",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
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
              width: "100%",
              maxWidth: "300px",
              height: "100%",
              maxHeight: "150px",
              backgroundColor: "#25252e",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#1e1e25",
                transform: "scale(1.05)",
              },
            }}
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
                width: "100%",
                maxWidth: "300px",
                height: "100%",
                maxHeight: "150px",
                backgroundColor: "#25252e",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
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
          padding: "20px",
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
