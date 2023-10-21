import styled from "styled-components";
import Text from "./Text";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";

import { v4 as uuidv4 } from "uuid";

const SwiperSlideBox = styled(SwiperSlide)`
  width: auto;
  height: 250px;
  object-fit: cover;
  object-position: 50% 50%;
  position: relative;
  overflow: visible;
`;

const SlideBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const SlideCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${(props) => props.img});

  &:hover .video__title{
    opacity: 1;
    transition-duration: 0.5s;
  }
`;

const SlideDesc = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  background-color: rgb(47, 47, 47);
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition-duration: 0.5s;
  
`;

const imgVariants = {
  normal: {
    scale: 1,
  },

  hover: {
    scale: 1.05,
  },
};

const descVariants = {
  normal: {
    opacity: 0,
  },

  hover: {
    opacity: 1,
  },
};

function Slider(props) {
  const imgLink = `https://image.tmdb.org/t/p/w400`;

  console.log(props.movieData);
  return (
    <AnimatePresence>
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
          style={{ overflow: "visible" }}
        >
          {props.movieData?.map((v) => (
            <>
              <SwiperSlideBox key={uuidv4()}>
                <SlideCard
                  initial="normal"
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  variants={imgVariants}
                  img={imgLink + v?.backdrop_path}
                >
                  <SlideDesc className="video__title"
                    
                  >
                    {v.title}
                  </SlideDesc>
                </SlideCard>
              </SwiperSlideBox>
            </>
          ))}

          {props.tvData?.map((v) => (
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
    </AnimatePresence>
  );
}

export default Slider;
