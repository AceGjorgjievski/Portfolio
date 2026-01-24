import { makeStyles } from "@mui/styles";

const useStylesProjects = makeStyles(() => ({
  project: {
    flex: 1,
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    transition: "all 0.35s ease",

    "&:hover": {
      backgroundColor: "rgba(34,197,94,0.15)",
      boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
      borderColor: "rgba(34,197,94,0.6)",
      transform: "scale(1.02)"
    },
  },
  projectMobile: {
    padding: 20,
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    transition: "all 0.35s ease",

    "&:hover": {
      backgroundColor: "rgba(34,197,94,0.15)",
      boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
      borderColor: "rgba(34,197,94,0.6)",
    },
  },
  externalLinks: {
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "rgba(34,197,94,0.15)",
      color: "white",
      boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
      borderColor: "rgba(34,197,94,0.6)",
    },
  },
}));

export default useStylesProjects;
