import { makeStyles } from "@mui/styles";

const useStylesStatsItems = makeStyles(() => ({
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    padding: "24px 16px",
    borderRadius: "16px",

    backgroundColor: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.15)",

    transition: "all 0.35s ease",

    "&:hover": {
      backgroundColor: "rgba(34,197,94,0.15)",
      boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
      borderColor: "rgba(34,197,94,0.6)",
      transform: "scale(1.02)",
    },
  },
}));

export default useStylesStatsItems;
