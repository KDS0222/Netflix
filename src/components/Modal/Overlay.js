import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import {
  Link,
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { createMovieMotionId } from "../../utils/helper";
import Backdrop from "./Backdrop";

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

function Overlay({ id }) {
  // const stateData = props.Data;
  // const navigation = useNavigate();

  console.log("overlay입니다");

  const [searchParams, setSearchParams] = useSearchParams();

  const motionId = searchParams.get("motionId");

  console.log(motionId);

  return (
    <>
      <Backdrop />
      <ModalContainer
        ayoutId={motionId}
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {/* <span>{stateData.title}</span> */}
        <motion.div l>
          <span>{id} 모달입니다.</span>
        </motion.div>
      </ModalContainer>
    </>
  );
}

export default Overlay;
