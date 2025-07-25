'use client'
import { useResponsive } from '@/hooks/use-response';
import HeaderDesktopView from './header-desktop-view';
import HeaderMobileView from './header-mobile-view';
import { useEffect, useState } from 'react';




export default function Header() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const xs = useResponsive("only", "xs");
    const sm = useResponsive("only", "sm");
    const md = useResponsive("only", "md");
    const lg = useResponsive("only", "lg");
    const isSmUp = useResponsive("up", "sm");

    if (!mounted) return null;

    return (
        <>
            {(isSmUp) ? (
                <HeaderDesktopView/>
            ) : (
                <HeaderMobileView/>
            )}


            {(xs) && (
                <div>XS</div>
            )}
            {(sm) && (
                <div>SM</div>
            )}
            {(md) && (
                <div>MD</div>
            )}{(lg) && (
                <div>LG</div>
            )}
        </>

    );
}