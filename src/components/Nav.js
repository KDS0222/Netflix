import { useScroll, motion, useTransform } from "framer-motion";
import styled from "styled-components";
import Logo from "./Logo";
import Wrapper from "./Wrapper";

const NavBox = styled(motion.div)`
  background: ${(props) => props.background};
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  position: fixed;
`;

const NavMenuBox = styled.ul`
  margin-left: 50px;
  display: flex;
`;

const NavMenuBtn = styled.li`
  color: rgb(229, 229, 229);
  font-weight: 600;
  margin-right: 20px;
  text-shadow: 2px 10px 16px #e5e5e5;
  cursor: pointer;
  position: relative;

  span{
    position: absolute;
    bottom: -7px;
    right: 50%;
    transform: translate(50%, 0%);
    width: 5px;
    height: 5px;
    background: red;
    border-radius: 100%;
  }
`;

function Nav() {
  const { scrollY } = useScroll();
  const bgOption = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgb(0,0,0)"]
  );

  return (
    <NavBox width="100%" heigth="60px" style={{ background: bgOption }}>
      <Wrapper display="flex" justif="space-between" align="center">
        <Logo />

        <NavMenuBox>
          <NavMenuBtn>
            홈
            <span />
          </NavMenuBtn>
          <NavMenuBtn>
            시리즈
          </NavMenuBtn>
        </NavMenuBox>
      </Wrapper>
    </NavBox>
  );
}

export default Nav;
