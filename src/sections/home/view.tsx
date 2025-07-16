"use client";

import { User } from "@/auth/types";
import { useResponsive } from "@/hooks/use-response";
import { getDocById } from "@/services/firestore";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import DesktopHomeView from "./desktop-home-view";
import MobileHomeView from "./mobile-home-view";

export default function HomeView() {
  const isSmUp = useResponsive("up", "sm");
  const isMdUp = useResponsive("up", "md");

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [user, setUser] = useState<User>();

  const onRenderComplete = () => {
    setIsFirstRender(false);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      const res = await getDocById("profile", "Ace");
      if (res) {
        setUser(res as User);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <Container sx={{ marginTop: "70px" }}>
      {user &&
        (isSmUp ? (
          <DesktopHomeView
            user={user}
            isFirstRender={isFirstRender}
            onRenderComplete={onRenderComplete}
            isMdUp={isMdUp}
          />
        ) : (
          <MobileHomeView
            user={user}
            isFirstRender={isFirstRender}
            onRenderComplete={onRenderComplete}
          />
        ))}
    </Container>
  );
}
