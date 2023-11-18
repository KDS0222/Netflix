import styled from "styled-components";
import Text from "./Text";

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media (max-width: 768px) {
    height: initial;
    padding-bottom: 50px;
  }
`;

const PortfolliText = styled(Text)`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export function Footer() {
  return (
    <FooterBox>
      <PortfolliText size="24px">Portfollio</PortfolliText>
      <PortfolliText size="18px">asstaff2020@gmail.com / Kim DongSin</PortfolliText>
    </FooterBox>
  );
}
