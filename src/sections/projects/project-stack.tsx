import { Stack, Typography } from "@mui/material";

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


export default function ProjectStack({ project }: Props) {
    return (
        <>
            <Stack
                direction="row"
                gap={1}
                sx={{
                    color: '#22c55e',
                    my: '10px',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start'
                }}
            >
                {project.stack.map((item, index) => {
                    return (
                        <Typography
                            key={index}
                            sx={{
                                fontSize: '15px'
                            }}
                        >
                            {item.name}
                            {index != project.stack.length - 1 && ','}
                        </Typography>
                    );
                })}
            </Stack>
        </>
    )
}
