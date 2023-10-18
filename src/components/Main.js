import styled from "styled-components";
import Banner from "./Banner";
import Wrapper from "./Wrapper";
import Slider from "./Slider";

function Main() {
  return (
    <Wrapper>
      <Banner />
      <Slider>상영 중인 영화</Slider>
      <Slider>상영 중인 영화</Slider>
      <Slider>상영 중인 영화</Slider>
      <Slider>상영 중인 영화</Slider>
    </Wrapper>
  );
}

export default Main;
