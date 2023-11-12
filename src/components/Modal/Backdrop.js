import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OverlayBox = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
`;


function Backdrop() {
  const navigation = useNavigate();

  return (
    <>
        <OverlayBox onClick={() => {navigation(-1)}} />
    </>
  );
}

export default Backdrop;
