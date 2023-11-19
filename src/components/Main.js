import styled from "styled-components";
import Banner from "./Banner";
import Wrapper from "./Wrapper";
import Slider from "./Slider";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useParams } from "react-router-dom";
import Overlay from "./Modal/Overlay";
import Details from "./Modal/Details";
import { Swiper as SwiperComponent } from 'swiper/react';
import { Pagination } from "swiper/modules";

import { SwiperSlide } from "swiper/react";

function Main(props) {
  const { id } = useParams();

  return (
    <>
      <AnimatePresence>{id && <Overlay id={id} />}</AnimatePresence>

      
      <Wrapper>
        <Banner movieData={props.movieData.popular} />

        <>
        <SwiperComponent style={{height: '500px', lineHeight: '500px', background: 'red'}}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </SwiperComponent>
      </>


        <LayoutGroup id="nowPlaying">
          <Slider movieData={props.movieData.nowPlaying}>상영 중인 영화</Slider>
        </LayoutGroup>

        <LayoutGroup id="popular">
          <Slider movieData={props.movieData.popular}>인기 영화</Slider>
        </LayoutGroup>

        <LayoutGroup id="topRated">
          <Slider movieData={props.movieData.topRated}>평판이 좋은 영화</Slider>
        </LayoutGroup>

        <LayoutGroup id="upComing">
          <Slider movieData={props.movieData.upcoming}>개봉 예정인 영화</Slider>
        </LayoutGroup>
      </Wrapper>
    </>
  );
}

export default Main;

// Framer-motinon LayoutGroup

// -> 노션이나 옵시디언에다가 정리해 남한테 강의노트쓰듯이
// -> 또까먹어 어차피 그래서 나중에 똑같은거쓸때 내 노션보면 ㅈㄴ편함

// Animatepresence
// layoutId

// 1. 모른거 배운거 키워드 기록하고
// 2. 노션에다가 정리해서 남에게 강의하듯이 기록
// 3. 어차피 나중에 까먹으니까 그때 다시 기록해둔거보면 빠르게 해결가능
