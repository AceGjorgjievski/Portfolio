import { useResponsive } from "@/hooks/use-response";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Container } from "@mui/material";

type Props = {
  animate: boolean;
  onRenderComplete: () => void;
};

export default function Photo({ animate, onRenderComplete, }: Props) {
  const isSmUp = useResponsive("up", "sm");
  const isMdUp = useResponsive("up", "md");

  const size = isMdUp ? 400 : isSmUp ? 280 : 280;


  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: size,
        height: size,
      }}
    >
      <motion.div
        initial={{ opacity: animate ? 0 : 1 }}
        animate={
          animate
            ? {
              opacity: 1,
              transition: { delay: 1.5, duration: 0.3, ease: "easeIn" },
            }
            : {}
        }
        onAnimationComplete={onRenderComplete}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox={`0 20 ${size} ${size}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute' }}
        >
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2.1}
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
        <Avatar
          alt="Profile picture"
          src="/profile/lepotan1.jpg"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            zIndex: 10,
          }}
        >
          "Empty"
        </Avatar>
      </motion.div>
    </Container>
  );
}
