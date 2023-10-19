import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

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

function Overlay() {
  return (
    <AnimatePresence>
      <ModalContainer animate="normal" exit="ani" variants={ModalVariants}>
        asd
      </ModalContainer>
    </AnimatePresence>
  );
}

export default Overlay;
