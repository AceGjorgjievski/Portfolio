import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { DrawerMobile } from "../drawer";
import { Container } from "@mui/material";
import { motion } from "framer-motion";

export default function HeaderMobileView() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "end",
          padding: "20px 20px",
        }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 2,
              ease: "easeOut",
            },
          }}
        />
        <CiMenuFries
          onClick={toggleDrawer}
          style={{ fontSize: "32px", color: "#22c55e", cursor: "pointer" }}
        />
        <DrawerMobile open={open} toggleDrawer={toggleDrawer} />
      </Container>
    </>
  );
}
