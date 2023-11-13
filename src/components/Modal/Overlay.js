import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { createMovieMotionId } from "../../utils/helper";
import Backdrop from "./Backdrop";
import Text from "./../Text";

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;

  width: 600px;
  height: 750px;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  z-index: 100;
`;

const ModalBg = styled.div`
  width: 100%;
  height: 400px;
  background-image: linear-gradient(to top, black, transparent),
    url(${(props) => props.backgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

const ModalWrap = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

function Overlay({ id }) {
  const location = useLocation();
  const cardData = location.state;

  console.log(cardData);

  const [searchParams, setSearchParams] = useSearchParams();

  const motionId = searchParams.get("motionId");
  const imgLink = `https://image.tmdb.org/t/p/original/`;

  return (
    <>
      {cardData && (
        <>
          <Backdrop />
          <ModalContainer
            layoutId={motionId}
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <ModalWrap>
              <ModalBg backgroundImg={imgLink + cardData?.backdrop_path}>
                <Text color="#ffffff" size="20px" weight="500" shadow=" ">
                  {cardData.original_name}
                </Text>
                <Text color="#ffffff" size="40px" weight="bold" shadow=" ">
                  {cardData.name}
                </Text>
              </ModalBg>
            </ModalWrap>
          </ModalContainer>
        </>
      )}
    </>
  );
}

export default Overlay;
