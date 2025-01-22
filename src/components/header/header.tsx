'use client'
import { useResponsive } from '@/hooks/use-response';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';

const pages = [
    {
        name: "Home",
        url: "/home"
    },
    {
        name: "Projects",
        url: "/projects"
    },
    {
        name: "Resume",
        url: "/resume"
    },
    {
        name: "Contact",
        url: "/contact"
    }
]

export default function Header() {

    const xs = useResponsive("only", "xs");
    const sm = useResponsive("only", "sm");
    const md = useResponsive("only", "md");
    const isMdUp = useResponsive("up", "md");

    const pathName = usePathname();


    return (
        <>
            <Container sx={{ display: 'flex', gap: 3, justifyContent: 'center', padding: '20px 10px' }}>
                {pages.map((page, index) => {
                    return (
                        <Link
                            href={page.url}
                            key={index}
                            sx={{
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                transition: 'color 0.3s ease, border-color 0.3s ease',
                                ...(page.url === pathName && {    
                                    color: '#22c55e',
                                    borderBottom: '2px solid #22c55e', 
                                }),
                                '&:hover': {
                                    color: '#22c55e',
                                },
                            }}
                        >
                            {page.name}
                        </Link>
                    )
                })}
                <h1></h1>
            </Container>

            {(xs) && (
                <div>XS</div>
            )}
            {(sm) && (
                <div>SM</div>
            )}
            {(md) && (
                <div>MD</div>
            )}
        </>

    );
}