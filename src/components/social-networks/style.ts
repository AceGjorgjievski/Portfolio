
import { makeStyles } from "@mui/styles";

const useStylesSocialNetworks = makeStyles((theme) => ({
    socialNetwork: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '2px solid green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'green',
        textDecoration: 'none',
        transition: '0.3s',
        '&:hover': {
            backgroundColor: 'green',
            color: 'white',
        }
    },
}));

export default useStylesSocialNetworks;