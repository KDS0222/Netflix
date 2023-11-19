import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SlideCard = styled(motion.div)`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-image: url(${(props) => props.img});
  cursor: pointer;
  background-position: center center;

  &:hover .video__title {
    opacity: 1;
    transition-duration: 0.5s;
  }

  @media (max-width: 768px) {
    height: 210px;
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
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
  const navigation = useNavigate();

  const location = useLocation();

  function navi() {
    location.pathname == "/tv"
      ? navigation(`/tv/${props.v.id}?motionId=${props.motionId}`, {
        state: props.v,
      })
      : navigation(`/${props.v.id}?motionId=${props.motionId}`, {
        state: props.v,
      });
  }

  return (
    <>
      <SlideCard
        initial="normal"
        whileHover="hover"
        transition={{ type: "tween" }}
        variants={imgVariants}
        img={imgLink + props.v?.backdrop_path}
        onClick={navi}
      >
        <SlideDesc className="video__title">
          {props.v.title || props.v.name}
        </SlideDesc>
      </SlideCard>
    </>
  );
}
