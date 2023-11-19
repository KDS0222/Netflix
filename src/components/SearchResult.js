import styled from "styled-components";
import Text from "./Text";
import SliderCard from "./SliderCard";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const CardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const CardBox = styled.div`
  width: 20%;
  height: 250px;
  padding: 5px;
  object-fit: cover;
  object-position: 50% 50%;
  position: relative;
  overflow: visible;

  @media (max-width:1200px) {
    overflow: initial;
  }

  @media (max-width:768px) {
    width: 33.3%;

    &:nth-child(1n){
      padding-left: 0;
    }

    &:nth-child(3n){
      padding-right: 0;
    }
  }

  @media (max-width:425px) {
    width: 49%;

    &:nth-child(2n){
      padding-right: 0;
    }
  }
`;

export function SearchResult(props) {
  return (
    <Wrapper margin="50px 0 0">
      <Text textAlign="left" margin="0 0 20px 20px" size="32px" weight="500">
        {props.children}
      </Text>

      <CardWrap>
        {(props.movieData || props.tvData)?.map((v) => (
          <CardBox>
            <motion.div>
              <SliderCard v={v}/>
            </motion.div>
          </CardBox>
        ))}
      </CardWrap>
    </Wrapper>
  );
}
