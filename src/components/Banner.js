import styled from "styled-components";
import Text from "./Text";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import { Link, useNavigate } from "react-router-dom";

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

  @media (max-width: 768px) {
    height: 45vh;
  }
`;

const InfoDescBox = styled.div``;

const MovieDesc = styled.div`
  width: 60%;
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

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

const TitleText = styled(Text)`
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SubText = styled(Text)`
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const DetailInfoText = styled(Text)`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FaInfoCircleIcon = styled(FaInfoCircle)`
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

function Banner(props) {
  const imgLink = `https://image.tmdb.org/t/p/original/`;
  const navigation = useNavigate();

  return (
    <>
      {props.movieData && (
        <BannerWrap img={imgLink + props.movieData[0].backdrop_path}>
          <InfoDescBox>
            <TitleText>{props.movieData[0].title}</TitleText>

            <MovieDesc>
              <SubText size="18px" weight="bold" line="26px">
                {props.movieData[0].overview}
              </SubText>
            </MovieDesc>

            <DetailBtn
              onClick={() => navigation(
                `/${props.movieData[0].id}`,
                {
                  state: props.movieData[0],
                }
              )}
            >
              <FaInfoCircleIcon size="24px" fill="#ffffff" />
              <DetailInfoText
                shadow="none"
                size="20px"
                weight="bold"
                color="#ffffff"
                margin="0 0 0 10px"
              >
                상세 정보
              </DetailInfoText>
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

            <DetailBtn onClick={() => navigation(
                `/tv/${props.tvData[0].id}`,
                {
                  state: props.tvData[0],
                }
              )}>
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
