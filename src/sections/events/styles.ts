import { makeStyles } from "@mui/styles";

const useStylesEvents = makeStyles(() => ({
  event: {
    width: "285px",
    backgroundColor: "#1e1e25",
    color: "white",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    transition: "0.3s ease-in-out",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    "&:hover": {
      backgroundColor: "rgba(34,197,94,0.15)",
      boxShadow: "0 0 35px -15px rgba(34,197,94,0.45)",
      transform: "scale(1.05)",
    },
  },
  eventLink: {
                      transition: "all 0.35s ease",
                      color: "white",
    
                      "&:hover": {
                        backgroundColor: "rgba(34,197,94,0.15)",
                        boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
                        borderColor: "rgba(34,197,94,0.6)",
                        transform: "scale(1.2)",
                      },
  }
}));

export default useStylesEvents;
