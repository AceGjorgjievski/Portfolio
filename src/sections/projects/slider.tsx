import { Box, Container } from "@mui/material";
import Image from "next/image";
import { useResponsive } from "@/hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Project } from "@/types";
import { useEffect, useRef } from "react";

type Props = {
  activeIndex: number;
  setActiveProject: (index: number) => void;
  setActiveIndex: (index: number) => void;
  allProjects: Project[];
  isSmUp: boolean;
};

export default function Slider({
  activeIndex,
  setActiveIndex,
  setActiveProject,
  allProjects,
  isSmUp,
}: Props) {
  const isMdUp = useResponsive("up", "md");

  const size = isMdUp ? 450 : isSmUp ? 320 : 250;
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setActiveIndex(currentIndex);
    setActiveProject(currentIndex);
  };

  const renderSwiper = (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop={false}
      navigation
      pagination={{ clickable: true }}
      initialSlide={activeIndex}
      onSlideChange={handleSlideChange}
    >
      {allProjects.map((project, index) => {
        return (
          <SwiperSlide key={index}>
            <Box
              sx={{
                padding: "20px",
                borderRadius: "8px",
                color: "white",
                height: "35vh",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={project.picture}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "8px" }}
              />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: size,
          height: size - 50,
        }}
      >
        {!isSmUp && (
          <>
            <Box
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                position: "absolute",
                left: 0,
                top: -30,
                width: "30%",
                height: "35vh",
                zIndex: 10,
                cursor: "pointer",
              }}
            />
            <Box
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                position: "absolute",
                right: 0,
                top: -30,
                width: "30%",
                height: "35vh",
                zIndex: 10,
                cursor: "pointer",
              }}
            />
          </>
        )}
        {renderSwiper}
      </Container>
    </>
  );
}
