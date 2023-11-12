import styled from "styled-components";
import Banner from "./Banner";
import Wrapper from "./Wrapper";
import Slider from "./Slider";
import { AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import Overlay from "./Modal/Overlay";

function Main(props) {

  const { id } = useParams();
  return (
    <AnimatePresence>

      {id && <Overlay id={id} />}
      <Wrapper>
        <Banner movieData={props.movieData.popular} />
        <Slider movieData={props.movieData.nowPlaying}>상영 중인 영화</Slider>
        <Slider movieData={props.movieData.popular}>인기 영화</Slider>
        <Slider movieData={props.movieData.topRated}>평판이 좋은 영화</Slider>
        <Slider movieData={props.movieData.upcoming}>개봉 예정인 영화</Slider>
      </Wrapper>
    </AnimatePresence>
  );
}

export default Main;
