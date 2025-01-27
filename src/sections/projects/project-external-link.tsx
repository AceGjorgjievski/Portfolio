import { Container, IconButton, Link, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

type StackItem = {
    name: string;
};

type Project = {
    number: string;
    category: string;
    title: string;
    desciption: string;
    stack: StackItem[];
    image: string;
    live: string;
    github: string;
};

type Props = {
    project: Project;
};

export default function ProjectExternalLink({ project }: Props) {
    return (
        <>
            <Container
                sx={{
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Link href={project.github}>
                    <Tooltip
                        title="GitHub Repo"
                        leaveDelay={150}
                    >
                        <IconButton
                            sx={{
                                color: '#22c55e',
                                '&:hover': {
                                    backgroundColor: 'green',
                                    color: 'white',
                                }
                            }}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
                {project.live !== '' && (
                    <Link href={project.live}>
                        <Tooltip
                            title="Live Demo"
                            leaveDelay={150}
                        >
                            <IconButton
                                sx={{
                                    color: '#22c55e',
                                    '&:hover': {
                                        backgroundColor: 'green',
                                        color: 'white',
                                    }
                                }}
                            >
                                <OpenInBrowserIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                )}
            </Container>
        </>
    )
}
