import { motion } from "framer-motion";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

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

const imgVariants = {
  normal: {
    scale: 1,
  },

  hover: {
    scale: 1.05,
  },
};

export default function SliderCard(props) {
  const imgLink = `https://image.tmdb.org/t/p/w400`;

  return (
    <>
      <SlideCard
        initial="normal"
        whileHover="hover"
        transition={{ type: "tween" }}
        variants={imgVariants}
        img={imgLink + props.v?.backdrop_path}
      >
        <SlideDesc className="video__title">
          {props.v.title || props.v.name}
        </SlideDesc>
      </SlideCard>
    </>
  );
}
