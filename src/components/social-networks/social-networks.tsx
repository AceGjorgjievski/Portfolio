import { Stack } from "@mui/material";
import Link from '@mui/material/Link';
import { socials } from "./types";





export default function SocialNetworks() {
    return (
        <>
            <Stack
                direction="row"
                gap={2}
            >
                {socials.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                        <Link
                            href={social.url}
                            key={index}
                        >
                            <IconComponent/>
                        </Link>
                    );
                })}
            </Stack>
        </>
    );
}
