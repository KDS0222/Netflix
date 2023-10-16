import styled from "styled-components";
import Text from "./Text";

const BannerWrap = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 80vh;
  background-image: url("https://via.placeholder.com/1920x800.jpg");
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const InfoDescBox = styled.div``;

const MovieDesc = styled.div`
    width: 40%;
  height: 100px;
`;

function Banner() {
  return (
    <BannerWrap>
      <InfoDescBox>
        <Text size="60px" weight="bold">
          메가로돈 2
        </Text>
        <Text size="28px" weight="bold" padding="15px 0">
          오늘의 인기 영화 11위
        </Text>
        <MovieDesc>
          <Text size="18px" weight="bold" padding="15px 0" line="26px">
            전 세계에서 가장 깊은 마리아나 해구, 역사상 가장 거대하고 무자비한
            포식자가 도사리는 그곳에서 강철 다이버 ‘조나스’(제이슨 스타뎀)가 더
            맹렬하게 돌아온 ‘메가로돈’과 짜릿한 대결을 펼치는 액션 어드벤처
          </Text>
        </MovieDesc>

        
      </InfoDescBox>
    </BannerWrap>
  );
}

export default Banner;
