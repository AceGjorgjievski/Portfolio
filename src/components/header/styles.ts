import { makeStyles } from "@mui/styles";

const useStylesHeader = makeStyles(() => ({
  header: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s ease, border-color 0.3s ease",
    display: "inline-block",
    "&:hover": {
      color: "#22c55e",
      boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
      borderColor: "rgba(34,197,94,0.6)",
      textDecoration: "none",
    },
  },
  active: {
    color: "#22c55e",
    borderBottom: "2px solid #22c55e",
  },
}));

export default useStylesHeader;
