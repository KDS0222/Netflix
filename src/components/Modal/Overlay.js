import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  width: 600px;
  height: 600px;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  z-index: 100;
`;

const ModalVariants = {
  normal: {
    opacity: 1,
  },

  ani: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

function Overlay(props) {
  // const stateData = props.Data;
  // const navigation = useNavigate();
  const {id} = useParams();

  return (
    <AnimatePresence>
      <ModalContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        {/* <span>{stateData.title}</span> */}
        <span>{id} 입니다.</span>
      </ModalContainer>
    </AnimatePresence>
  );
}

export default Overlay;
