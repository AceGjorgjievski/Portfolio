import { Stack } from "@mui/material";
import Link from '@mui/material/Link';
import { socials } from "./types";
import useStylesSocialNetworks from "./style";


export default function SocialNetworks() {

    const classes = useStylesSocialNetworks();

    return (
        <>
            <Stack
                direction="row"
                sx={{marginTop: '40px'}}
                gap={2}
            >
                {socials.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                        <Link
                            href={social.url}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.socialNetwork}
                            sx={{
                                color: '#22c55e'
                            }}
                        >
                            <IconComponent />
                        </Link>
                    );
                })}
            </Stack>
        </>
    );
}
