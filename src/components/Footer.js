import styled from "styled-components";
import Text from "./Text";

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export function Footer() {
  return (
    <FooterBox>
      <Text size="24px">Portfollio</Text>
      <Text size="18px">asstaff2020@gmail.com / Kim DongSin</Text>
    </FooterBox>
  );
}
