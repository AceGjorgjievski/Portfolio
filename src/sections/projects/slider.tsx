'use-client';

import { projects } from "@/sections/projects/projects";

import { Box, Container } from "@mui/material";
import Image from "next/image";
import { useResponsive } from "@/hooks/use-response";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

type Props = {
    setActiveProject: (index: number) => void;
    isSmUp: boolean;
}

export default function Slider({ setActiveProject, isSmUp }: Props) {
    const isMdUp = useResponsive("up", "md");

    const size = isMdUp ? 450 : isSmUp ? 320 : 250;

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setActiveProject(currentIndex);
    }

    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    width: size,
                    height: size-50,
                }}
            >
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={false}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={handleSlideChange}
                >
                    {projects.map((project, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <Box
                                    sx={{
                                        padding: '20px',
                                        borderRadius: '8px',
                                        color: 'white',
                                        height: '35vh',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        style={{ borderRadius: '8px' }}
                                    />
                                </Box>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Container>
        </>
    )
}
