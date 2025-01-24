'use client';

import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from "next/navigation";
import useStylesPageTransition from "./style";


type Props = {
    children: React.ReactNode;
}

export default function PageTransition({ children }: Props) {
    const pathName = usePathname();
    const classes = useStylesPageTransition();


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

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{
                            opacity: 1,
                            transition: { delay: 1, duration: 0.4, ease: 'easeIn' }
                        }}
                    >
                    {children}
                    </motion.div>

                </div>
            </AnimatePresence>
        </>
    );
}
