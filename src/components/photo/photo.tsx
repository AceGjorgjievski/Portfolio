import { useResponsive } from "@/hooks/use-response";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Container } from "@mui/material";

type Props = {
  animate: boolean;
  onRenderComplete: () => void;
};

export default function Photo({ animate, onRenderComplete }: Props) {
  const isSmUp = useResponsive("up", "sm");
  const isMdUp = useResponsive("up", "md");
  const isXsUp = useResponsive("up", "xs");

  const size = isMdUp ? 400 : isSmUp ? 320 : 280;
  const viewBox = isMdUp ? `-24 -5 ${size} ${size}`
                  : isSmUp ? `13 6 ${size} ${size}` 
                  : `33 6 ${size} ${size}`;
  const motionCircleRadius = isMdUp ? (size / 1.9 - 20) 
                  : (size / 1.9 - 22)

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: size + 10,
        height: size + 10,
        marginLeft: 0,
        marginRight: isXsUp && !isSmUp ? '10rem' : 0
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
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          marginLeft: isMdUp ? '5rem' : isSmUp ? 0 : isXsUp ? '10rem' : 0,
          marginRight: isMdUp ? 0 : isSmUp ? '11rem' : isXsUp ? 0 : 0,
        }}
      >
        <motion.svg
          width="25rem"
          height="100%"
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            position: "absolute", 
          }}
        >
          <motion.circle
            cx={size / 2 - 30}
            cy={size / 2 - 3}
            r={motionCircleRadius}
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
        <Avatar
          alt="Profile picture"
          src="https://avatars.githubusercontent.com/u/54333799?v=4"
          sx={{
            width: size - 32,
            height: size - 32,
            borderRadius: "50%",
            zIndex: 10,
            marginTop: isMdUp ? '1.5rem' : '0.7rem',
            marginLeft: '0.688rem'
          }}
        >
          "Empty"
        </Avatar>
      </motion.div>
    </Container>
  );
}
