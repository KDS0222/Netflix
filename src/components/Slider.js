import styled from "styled-components";
import Text from "./Text";

// Import Swiper React components
import { SwiperSlide as Slide } from "swiper/react";
import { Swiper as SwiperComponent } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import { v4 as uuidv4 } from "uuid";
import SliderCard from "./SliderCard";
import { createMovieMotionId, createTvMotionId } from "../utils/helper";

const SwiperSlideBox = styled(Slide)`
  width: auto;
  height: 250px;
  object-fit: cover;
  object-position: 50% 50%;
  position: relative;
  overflow: visible;

  @media (max-width: 1200px) {
    overflow: initial;
  }
`;

const SlideBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const VideoTitle = styled(Text)`
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

function Slider(props) {
  return (
    <SlideBox>
      <VideoTitle margin="0 0 20px 20px" size="32px" weight="bold">
        {props.children}
      </VideoTitle>
      <SwiperComponent
        slidesPerView={5}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        navigation={true}
        className="mySwiper1"
        breakpoints={{
          1200: {
            slidesPerView: 5,
            spaceBetween: 15,
          },

          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

          500: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
      >
        {props.movieData?.map((v) => {
          const motionId = createMovieMotionId(v.id);

          return (
            <Slide key={uuidv4()}>
              <motion.div layoutId={motionId}>
                <SliderCard v={v} motionId={motionId} />
              </motion.div>
            </Slide>
          );
        })}

        {props.tvData?.map((v) => {
          const motionTvId = createTvMotionId(v.id);

          return (
            <Slide key={uuidv4()}>
              <motion.div layoutId={motionTvId}>
                <SliderCard v={v} motionId={motionTvId} />
              </motion.div>
            </Slide>
          );
        })}
      </SwiperComponent>
    </SlideBox>
  );
}

export default Slider;
