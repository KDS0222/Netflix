import styled from "styled-components";
import Banner from "./Banner";
import Wrapper from "./Wrapper";
import Slider from "./Slider";

function Main(props) {

  return (
    <Wrapper>
      <Banner movieData={props.movieData.popular} />
      <Slider movieData={props.movieData.nowPlaying}>상영 중인 영화</Slider>
      <Slider movieData={props.movieData.popular}>인기 영화</Slider>
      <Slider movieData={props.movieData.topRated}>평판이 좋은 영화</Slider>
      <Slider movieData={props.movieData.upcoming}>개봉 예정인 영화</Slider>
    </Wrapper>
  );
}

export default Main;
