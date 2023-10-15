import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const NavBox = styled(motion.div)`
  background: ${(props) => props.background};
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  position: fixed;
`;

function Nav(props) {
  const { scrollY } = useScroll();
  const bgOption = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,1)', 'rgba(0,0,0,0.5)'],
  );

  return (
    <NavBox width="100%" heigth="60px" style={{ background: bgOption }}>
      {props.children}
    </NavBox>
  );
}

export default Nav;
