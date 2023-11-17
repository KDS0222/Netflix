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
import Wrapper from "../Wrapper";
import { getMovies, movieApi } from "../../api/api";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { Loading } from "../Loading";
import adult from "./../../images/adult.svg";
import { BiCameraMovie } from "react-icons/bi";


const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;

  min-width: 600px;
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
  background-color: rgb(47, 47, 47);
  border-radius: 6px;
  position: relative;
`;

const Adult = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

function Overlay({ id }) {
  const location = useLocation();
  const cardData = location.state;

  const { isLoading, error, data } = useQuery("movieData", () =>
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1efe7e9dcfe999d6d25a99f91164d434&language=ko-kr`
    ).then((res) => res.json())
  );

  console.log(data);

  const [searchParams, setSearchParams] = useSearchParams();

  const motionId = searchParams.get("motionId");
  const imgLink = `https://image.tmdb.org/t/p/original/`;

  if (isLoading) return <Loading />;
  if (error) return "An error ";

  console.log("Overlay console: " + id);
  console.log("Detail Data");

  function totalTime(value){
    let totalTime = value;
    let hour = parseInt(totalTime / 60);
    let min = totalTime % 60;

    return `${hour}시간 ${min}분`;
  }


  return (
    <>
      {cardData &&  (
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
              {data.adult && <Adult src={adult} />}
              <ModalBg backgroundImg={imgLink + cardData?.backdrop_path}>
                <Text color="rgb(229, 229, 229)" size="20px" weight="500">
                  {cardData.original_name || cardData.original_title}
                </Text>
                <Text color="rgb(229, 229, 229)" size="40px" weight="bold">
                  {cardData.name || cardData.title}
                </Text>
              </ModalBg>

              <Wrapper padding="20px">
                <Wrapper display="flex" align="center">
                  <Text
                    color="rgb(229, 229, 229)"
                    size="24px"
                    weight="500"
                    shadow=" "
                    marginRight="12px"
                  >
                    {cardData.release_date?.slice(0, 4) ||
                      cardData.first_air_date?.slice(0, 4)}
                  </Text>

                  {data.genres.map((v) => (
                    <div
                      style={{
                        backgroundColor: "black",
                        padding: "3px 5px",
                        marginRight: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      <Text
                        color="rgb(229, 229, 229)"
                        margin="0 3px"
                        size="14px"
                      >
                        {`#${v.name}`}
                      </Text>
                    </div>
                  ))}
                </Wrapper>

                <Wrapper display="flex" align="center" margin="10px 0">
                  <BiCameraMovie color="green"/>
                  <Text marginLeft="5px"
                    color="rgb(229, 229, 229)"
                  >{totalTime(data.runtime)}</Text>
                </Wrapper>
              </Wrapper>
            </ModalWrap>
          </ModalContainer>
        </>
      )}
    </>
  );
}

export default Overlay;
