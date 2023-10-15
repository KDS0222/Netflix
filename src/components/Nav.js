import { useScroll, motion, useTransform } from "framer-motion";
import styled from "styled-components";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";



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

  span {
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

const SearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 250px;
  height: 40px;
  border-radius: 5px;
  padding: 5px 10px;
` 

const SearchBox = styled.input`
  width: 200px;
  height: 100%;
  background: none;
  outline: none;
  border: none;
  color: #e5e5e5;
  font-size: 16px;

  &::placeholder{
    color: #e5e5e5;
    font-size: 14px;
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
      <Wrapper
        display="flex"
        justify="space-between"
        align="center"
        width="100%"
      >
        <Logo />

        <Wrapper
          width="100%"
          display="flex"
          justify="space-between"
          align="center"
        >
          <NavMenuBox>
            <NavMenuBtn>
              홈
              <span />
            </NavMenuBtn>
            <NavMenuBtn>시리즈</NavMenuBtn>
          </NavMenuBox>

          <SearchWrap >
            <BiSearch size="24px" style={{cursor: 'pointer'}} />
            <SearchBox placeholder="Search for..."/>
          </SearchWrap>
        </Wrapper>
      </Wrapper>
    </NavBox>
  );
}

export default Nav;
