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
        }, 200);

        return () => clearTimeout(timer);
    }, [pathName]);

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathName}>
                    <motion.div
                        className={classes.slideIn}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 0 }}
                        exit={{ scaleX: 1 }}
                        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <motion.div
                        className={classes.slideOut}
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {showContent && children}
                </div>
            </AnimatePresence>
        </>
    );
}
