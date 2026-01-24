import { makeStyles } from "@mui/styles";

const useStylesPhoto = makeStyles(() => ({
  photo: {
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "rgba(34,197,94,0.15)",
      color: "white",
      boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
      borderColor: "rgba(34,197,94,0.6)",
    },
  },
}));

export default useStylesPhoto;
