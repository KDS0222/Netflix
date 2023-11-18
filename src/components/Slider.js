import styled from "styled-components";
import Text from "./Text";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import SliderCard from "./SliderCard";
import { createMovieMotionId, createTvMotionId } from "../utils/helper";

const SwiperSlideBox = styled(SwiperSlide)`
  width: auto;
  height: 250px;
  object-fit: cover;
  object-position: 50% 50%;
  position: relative;
  overflow: visible;


  @media (max-width:1200px) {
    overflow: initial;
  }
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

  &:hover .video__title {
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
        modules={[FreeMode, Pagination, Navigation]}
        navigation={true}
        className="mySwiper"

        breakpoints= {{
          // when window width is >= 320px
          1200:{
            slidesPerView: 5,
            spaceBetween: 15
          },

          700:{
            slidesPerView: 3,
            spaceBetween: 15
          },

          500:{
            slidesPerView: 2,
            spaceBetween: 15
          },
          300:{
            slidesPerView: 1,
            spaceBetween: 15
          },
        }}
      >
        {props.movieData?.map((v) => {
          const motionId = createMovieMotionId(v.id);

          return (
            <SwiperSlideBox key={uuidv4()}>
              <motion.div layoutId={motionId}>
                <SliderCard v={v} motionId={motionId} />
              </motion.div>
            </SwiperSlideBox>
          );
        })}

        {props.tvData?.map((v) => {
          const motionTvId = createTvMotionId(v.id);

          return (
            <SwiperSlideBox key={uuidv4()}>
              <motion.div layoutId={motionTvId}>
                <SliderCard v={v} motionId={motionTvId} />
              </motion.div>
            </SwiperSlideBox>
          );
        })}

        {/* <div>
          <motion.div layoutId="movie-motion-5929392">
        <Link to={`/5929392`}>

          <SliderCard />

        </Link>
        </motion.div>
        </div> */}

        {/*/ 
        {props.tvData?.map((v) => (
          <SwiperSlideBox key={uuidv4()}>
            <Link to={"/" + v.id}>
              <SliderCard v={v} />
            </Link>
          </SwiperSlideBox>
        ))}

        */}
      </Swiper>
    </SlideBox>
  );
}

export default Slider;
