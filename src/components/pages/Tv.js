import styled from "styled-components";
import Banner from "../Banner";
import Slider from "../Slider";

export function Tv(props) {
    console.log(props.tvData);
  return (
    <>
      <Banner tvData={props.tvData.popular} />
      <Slider tvData={props.tvData.airingToday}>인기 시리즈</Slider>
      <Slider tvData={props.tvData.topRated}>평판이 좋은 시리즈</Slider>
      <Slider tvData={props.tvData.onTheAir}>방영 중인 시리즈</Slider>
    </>
  );
}
