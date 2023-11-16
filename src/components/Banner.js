import styled from "styled-components";
import Text from "./Text";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";

const BannerWrap = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)),
    url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const InfoDescBox = styled.div``;

const MovieDesc = styled.div`
  width: 40%;
  height: 100px;
  margin: 15px 0;
`;

const DetailBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(47, 47, 47);
  padding: 10px 15px;
  border-radius: 5px;
`;

function Banner(props) {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const imgLink = `https://image.tmdb.org/t/p/original/`;


  // if(props?.movieData){
  //   randomKey = rand(1, Object.keys(props.movieData).length);
  // }else{
  //   randomKey = rand(1, Object.keys(props.tvData).length)
  // }
  return (
    <>
      {props.movieData && (
        <BannerWrap img={imgLink + props.movieData[0].backdrop_path}>
          <InfoDescBox>
            <Text size="60px" weight="bold">
              {props.movieData[0].title}
            </Text>

            <MovieDesc>
              <Text size="18px" weight="bold" line="26px">
                {props.movieData[0].overview}
              </Text>
            </MovieDesc>

            <DetailBtn>
              <FaInfoCircle size="24px" fill="#ffffff" />
              <Text
                shadow="none"
                size="20px"
                weight="bold"
                color="#ffffff"
                margin="0 0 0 10px"
              >
                상세 정보
              </Text>
            </DetailBtn>
          </InfoDescBox>
        </BannerWrap>
      )}

      {props.tvData && (
        <BannerWrap img={imgLink + props.tvData[0].backdrop_path}>
          <InfoDescBox>
            <Text size="60px" weight="bold">
              {props.tvData[0].name}
            </Text>

            <MovieDesc>
              <Text size="18px" weight="bold" line="26px">
                {props.tvData[0].overview}
              </Text>
            </MovieDesc>

            <DetailBtn>
              <FaInfoCircle size="24px" fill="#ffffff" />
              <Text
                shadow="none"
                size="20px"
                weight="bold"
                color="#ffffff"
                margin="0 0 0 10px"
              >
                상세 정보
              </Text>
            </DetailBtn>
          </InfoDescBox>
        </BannerWrap>
      )}
    </>
  );
}

export default Banner;
