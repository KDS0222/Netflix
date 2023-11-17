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
`;

function Overlay({ id }) {
  const location = useLocation();
  const cardData = location.state;

  // const {isLoading, error, data} = useQuery(
  //   "movieData",
  //   async () => {
  //     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1efe7e9dcfe999d6d25a99f91164d434&language=ko-kr`);

  //     if(!response.ok) {
  //       throw new Error("Failed to fetch movie Data");
  //     }

  //     return response.json();
  //   },
  //   {
  //     staleTime: Infinity,
  //     refetchOnWindowFocus: false
  //   }

  // )
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
                    <div style={{backgroundColor: "black", padding: "3px 5px", marginRight: "5px", borderRadius: "10px"}}>
                      <Text color="rgb(229, 229, 229)" margin="0 3px" size="14px">
                        {`#${v.name}`}
                      </Text>
                    </div>
                  ))}
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
