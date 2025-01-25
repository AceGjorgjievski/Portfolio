import { useResponsive } from "@/hooks/use-response";
import Image from "next/image";
import { motion } from 'framer-motion';

type Props = {
    animate: boolean;
    onRenderComplete: () => void;
}

export default function Photo({animate, onRenderComplete}: Props) {

    const isSmUp = useResponsive("up", "sm");
    const isMdUp = useResponsive("up", "md");

    const size = isMdUp ? 400 : isSmUp ? 280 : 280;


    return (
        <>
            <motion.div
                initial={{opacity: animate ? 0 : 1}}
                animate={
                    animate
                    ? { opacity: 1, transition: { delay: 1.5, duration: 0.3, ease: 'easeIn' } }
                    : {}
                }
                onAnimationComplete={onRenderComplete}
            >
                <Image
                    src="/profile/lepotan_puta_2.png"
                    width={size}
                    height={size}
                    priority
                    style={{ borderRadius: '50%', }}
                    alt="Profile Photo"
                />
            </motion.div>
        </>
    );
}
