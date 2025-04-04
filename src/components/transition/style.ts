
import {makeStyles} from "@mui/styles";

const useStylesPageTransition = makeStyles((theme) => ({
    slideIn: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: '#0f0f0f',
        'transform-origin': 'right',
    },
    slideOut: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: '#0f0f0f',
        'transform-origin': 'left',
    }
}));

export default useStylesPageTransition;