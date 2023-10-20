import styled from "styled-components";
import Text from "./Text";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import 'swiper/css/navigation';

// import required modules
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import { v4 as uuidv4 } from "uuid";

const SwiperSlideBox = styled(SwiperSlide)`
  width: auto;
  height: 250px;
  object-fit: cover;
  object-position: 50% 50%;
`;

const SlideBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const SlideCard = styled(motion.img)`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const imgVariants = {
  normal: {
    scale: 1,
  },

  hover: {
    scale: 1.05,
  },
};

function Slider(props) {
  console.log(props.movieData);
  const imgLink = `https://image.tmdb.org/t/p/w400`;
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
        modules={[FreeMode, Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {props.movieData?.map((v) => (
          <>
            <SwiperSlideBox key={uuidv4()}>
              <SlideCard
                initial="normal"
                whileHover="hover"
                transition={{ type: "tween" }}
                variants={imgVariants}
                src={imgLink + v?.backdrop_path}
              />
            </SwiperSlideBox>
          </>
        ))}
      </Swiper>
    </SlideBox>
  );
}

export default Slider;
