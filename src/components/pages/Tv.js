import styled from "styled-components";
import Banner from "../Banner";
import Slider from "../Slider";
import { AnimatePresence } from "framer-motion";
import Overlay from "../Modal/Overlay";
import { useParams } from "react-router-dom";

export function Tv(props) {

  const { id } = useParams();
  return (
    <>
      <AnimatePresence>{id && <Overlay id={id} />}</AnimatePresence>

      <Banner tvData={props.tvData.popular} />
      <Slider tvData={props.tvData.airingToday}>인기 시리즈</Slider>
      <Slider tvData={props.tvData.topRated}>평판이 좋은 시리즈</Slider>
      <Slider tvData={props.tvData.onTheAir}>방영 중인 시리즈</Slider>
    </>
  );
}
