import styled from "styled-components";
import Text from "./Text";
import SliderCard from "./SliderCard";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

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
            <Link to="/">
              <SliderCard v={v} />
            </Link>
          </CardBox>
        ))}
      </CardWrap>
    </Wrapper>
  );
}