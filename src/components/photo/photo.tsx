import { useResponsive } from "@/hooks/use-response";
import Image from "next/image";
import { motion } from 'framer-motion';


export default function Photo() {

    const isSmUp = useResponsive("up", "sm");
    const isMdUp = useResponsive("up", "md");

    const size = isMdUp ? 400 : isSmUp ? 280 : 280;


    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: { delay: 1, duration: 0.4, ease: 'easeIn' }
                }}
                style={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    mixBlendMode: 'lighten'
                }}
            >
                <Image
                    src="/profile/lepotan_puta_2.png"
                    width={size}
                    height={size}
                    priority
                    style={{ borderRadius: '50%', mixBlendMode: 'lighten' }}
                    alt="Profile Photo"
                />
            </motion.div>
        </>
    );
}
