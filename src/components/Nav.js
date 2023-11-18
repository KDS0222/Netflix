import { useScroll, motion, useTransform } from "framer-motion";
import styled from "styled-components";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";

const NavBox = styled(motion.div)`
  background: ${(props) => props.background};
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 50px;
  padding-right: 15px;
  position: fixed;
  z-index: 100;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const NavMenuBox = styled.ul`
  margin-left: 50px;
  display: flex;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
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

  @media (max-width: 768px) {
    margin-right: 10px;
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

  @media (max-width: 425px) {
    width: 180px;
  }
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

  @media (max-width: 425px) {
    width: 100%;
  }
`;

function Nav(props) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [searchBarSize, setSearchBarSize] = useState(200);
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const navigation = useNavigate();

  const [inputValue, setInputValue] = useState("");


  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

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

  const searchKeywordHandler = (e) => {
    if (e.which === 13) {

      navigation(`/search?keyword=${inputValue}`, {
        state: {
          movieData: props.movieData,
          tvData: props.tvData,
        },
      });
    }
  };
  
  useEffect(() => {
    if(innerWidth > 767){
      setSearchBarSize(200);
    }else{
      setSearchBarSize(150);
    }

  }, [innerWidth])
  
  

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
              <Link to="/">홈</Link>
            </NavMenuBtn>

            <NavMenuBtn>
              <Link to="/tv">시리즈</Link>
            </NavMenuBtn>
          </NavMenuBox>

          <SearchWrap
            initial={{ x: searchBarSize }}
            animate={{
              x: searchOpen ? 0 : searchBarSize,
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
              onChange={inputChangeHandler}
              onKeyDown={searchKeywordHandler}
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
