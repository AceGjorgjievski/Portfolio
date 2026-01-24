import { makeStyles } from "@mui/styles";

const useStylesSocialNetworks = makeStyles(() => ({
  socialNetwork: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "2px solid green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "green",
    textDecoration: "none",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "rgba(34,197,94,0.15)",
      color: "white",
      boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
      borderColor: "rgba(34,197,94,0.6)",
      transform: "scale(1.07)",
    },
  },
}));

export default useStylesSocialNetworks;
