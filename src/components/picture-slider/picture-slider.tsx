import { Box } from "@mui/material";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  pictures: string[];
};

export default function PictureSlider({ pictures }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: 200,
          sm: 300,
          md: 400,
        },
        borderRadius: 2,
        overflow: "hidden",
        mb: 2,
      }}
    >
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "100%" }}
      >
        {pictures.map((src, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={src}
                alt={`event-picture-${index}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
