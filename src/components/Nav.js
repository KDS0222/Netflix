import { useScroll, motion, useTransform, animate } from "framer-motion";
import styled from "styled-components";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

const NavBox = styled(motion.div)`
  background: ${(props) => props.background};
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  position: fixed;
  z-index: 100;
`;

const NavMenuBox = styled.ul`
  margin-left: 50px;
  display: flex;
`;

const NavMenuBtn = styled.li`
  color: rgb(229, 229, 229);
  font-weight: 600;
  margin-right: 20px;
  text-shadow: rgba(0, 0, 0, 0.6) 1px 1px 10px;
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

const SearchWrap = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0);
  width: 250px;
  height: 40px;
  border-radius: 5px;
  padding: 5px 10px;
`;

const SearchBox = styled(motion.input)`
  width: 200px;
  height: 100%;
  background: none;
  outline: none;
  border: none;
  color: #e5e5e5;
  font-size: 16px;

  &::placeholder {
    color: #e5e5e5;
    font-size: 14px;
  }
`;

const Circle = styled(motion.span)`
  width: 10px;
  height: 10px;
  display: block;
  background-color: ${(props) => props.theme.red};
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -15px;
  border-radius: 10px;
 ` 

function Nav() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const searchToggleHander = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
    setSearchOpen(!searchOpen);
  };

  const { scrollY } = useScroll();
  const bgOption = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgb(0,0,0)"]
  );

  return (
    <NavBox
      width="100%"
      heigth="60px"
      style={{ background: bgOption, transition: "all 0.5s" }}
    >
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
              <Link to="/" onClick={()=> { window.scrollTo(0, 0)}}>홈</Link>
            </NavMenuBtn>
            <NavMenuBtn>
              <Link to="/tv" >시리즈</Link>
            </NavMenuBtn>
          </NavMenuBox>

          <SearchWrap
            initial={{ x: 200 }}
            animate={{
              x: searchOpen ? 0 : 200,
              transition: "duration: 0.5",
              borderColor: `rgba(255,255,255, ${searchOpen ? "0.5" : "0"})`,
              backgroundColor: `rgba(0,0,0,${searchOpen ? "0.5" : "0"})`,
            }}
          >
            <BiSearch
              onClick={searchToggleHander}
              size="24px"
              style={{ cursor: "pointer" }}
            />
            <SearchBox
              ref={inputRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: searchOpen ? 1 : 0, transition: "0.3s" }}
              placeholder="Search for..."
            />
          </SearchWrap>
        </Wrapper>
      </Wrapper>
    </NavBox>
  );
}

export default Nav;
