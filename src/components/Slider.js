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
  width: 200px;
  height: auto;
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
  background: url(${(props) => props.img});
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
  const imgLink = `https://image.tmdb.org/t/p/w500`;
  console.log(imgLink);
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
        {Object.keys(props.movieData).map((key) => (
          <SwiperSlideBox>
            <SlideCard
              initial="normal"
              whileHover="hover"
              transition={{ type: "tween" }}
              variants={imgVariants}
              src={imgLink + props.movieData[key].poster_path}
            ></SlideCard>
          </SwiperSlideBox>
        ))}
      </Swiper>
    </SlideBox>
  );
}

export default Slider;
