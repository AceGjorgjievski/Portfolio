import { makeStyles } from "@mui/styles";

const useStylesResume = makeStyles(() => ({
  sectionTitle: {
    transition: "all 0.35s ease",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    cursor: "pointer",
    padding: "15px",
    textAlign: "center",

    "&:hover": {
      backgroundColor: "green",
      boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
      borderColor: "rgba(34,197,94,0.6)",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    width: "100%",
    maxWidth: "300px",

    backgroundColor: "#25252e",
    color: "white",

    transition: "0.3s ease-in-out",

    "&:hover": {
      backgroundColor: "rgba(34,197,94,0.15)",
      boxShadow: "0 0 35px -20px rgba(34,197,94,0.45)",
      transform: "scale(1.05)",
    },
  },
}));

export default useStylesResume;
