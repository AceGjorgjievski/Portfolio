'use client'
import { useResponsive } from '@/hooks/use-response';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';
import MobileNav from './mobileNav';
import { pages } from './pages';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';




export default function Header() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const xs = useResponsive("only", "xs");
    const sm = useResponsive("only", "sm");
    const md = useResponsive("only", "md");
    const isSmUp = useResponsive("up", "sm");

    const pathName = usePathname();
    
    if (!mounted) return null;

    return (
        <>
            {(isSmUp) ? (
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
                                    ...((page.url === pathName || (pathName === '/' && page.url === '/home')) && {
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
            ) : (
                <Container sx={{ display: 'flex', gap: 3, justifyContent: 'end', padding: '20px 10px' }}>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ 
                            opacity: 0,
                            transition: {
                                delay: 1,
                                duration: 2,
                                ease: 'easeOut'
                            }
                        }}
                    />
                    <MobileNav />
                </Container>
            )}


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