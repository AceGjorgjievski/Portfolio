'use client';

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from "next/navigation";
import useStylesPageTransition from "./style";


type Props = {
    children: React.ReactNode;
}

export default function PageTransition({ children }: Props) {
    const pathName = usePathname();
    const classes = useStylesPageTransition();

    const [showContent, setShowContent] = useState(false);

    //delay for showing the children after the transition is being rendered
    useEffect(() => {
        setShowContent(false);

        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);

        return () => clearTimeout(timer);
    }, [pathName]);

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathName}>
                    <motion.div
                        className={classes.slideIn}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <motion.div
                        className={classes.slideOut}
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {showContent && children}
                </div>
            </AnimatePresence>
        </>
    );
}
