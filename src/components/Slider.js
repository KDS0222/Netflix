import styled from "styled-components";
import Text from "./Text";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const SwiperSlideBox = styled(SwiperSlide)`
  background: #fff;
  width: 300px;
  height: 300px;
`;

const SlideBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const SlideCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: red;
`;

const imgVariants = {
  normal: {
    scale: 1,
  },

  hover: {
    scale: 1.05,
    transition: { delay: 0.3 },
  },
};

function Slider(props) {
  return (
    <SlideBox>
      <Text margin="0 0 20px 20px" size="32px" weight="bold">
        {props.children}
      </Text>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlideBox>
          <SlideCard
            initial="normal"
            whileHover="hover"
            transition={{ type: "tween" }}
            variants={imgVariants}
          >
            Slide 1
          </SlideCard>
        </SwiperSlideBox>

        <SwiperSlideBox>
          <SlideCard
            initial="normal"
            whileHover="hover"
            transition={{ type: "tween" }}
            variants={imgVariants}
          >
            Slide 1
          </SlideCard>
        </SwiperSlideBox>

        <SwiperSlideBox>
          <SlideCard
            initial="normal"
            whileHover="hover"
            transition={{ type: "tween" }}
            variants={imgVariants}
          >
            Slide 1
          </SlideCard>
        </SwiperSlideBox>

        <SwiperSlideBox>
          <SlideCard
            initial="normal"
            whileHover="hover"
            transition={{ type: "tween" }}
            variants={imgVariants}
          >
            Slide 1
          </SlideCard>
        </SwiperSlideBox>

        <SwiperSlideBox>
          <SlideCard
            initial="normal"
            whileHover="hover"
            transition={{ type: "tween" }}
            variants={imgVariants}
          >
            Slide 1
          </SlideCard>
        </SwiperSlideBox>

        <SwiperSlideBox>
          <SlideCard
            initial="normal"
            whileHover="hover"
            transition={{ type: "tween" }}
            variants={imgVariants}
          >
            Slide 1
          </SlideCard>
        </SwiperSlideBox>
      </Swiper>
    </SlideBox>
  );
}

export default Slider;
