import { Project } from "@/types";
import { Stack, Typography } from "@mui/material";

type Props = {
  activeProject: Project;
};

export default function ProjectStack({ activeProject }: Props) {
  if (!activeProject.stack.length) return null;

  return (
    <Stack
      direction="row"
      gap={1}
      sx={{
        color: "#22c55e",
        my: "10px",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {activeProject.stack.map((item, index) => {
        return (
          <Typography
            key={index}
            sx={{
              fontSize: "15px",
            }}
          >
            {item}
            {index != activeProject.stack.length - 1 && ","}
          </Typography>
        );
      })}
    </Stack>
  );
}
