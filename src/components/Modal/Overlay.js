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

const OverView = styled.span`
  color: #ffffff;
  line-height: 24px;
  font-size: 13px;
`;

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
  background-color: rgb(47, 47, 47);
  border-radius: 6px;
  position: relative;
  overflow: auto;
`;

const Adult = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const AverageBox = styled.div`
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAAXCAYAAADUf9f5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNmNmMDg0MS0zNzQ3LWMyNDUtYWU3YS00YjljNzliODA1NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODM5NjFCNjA4ODUwMTFFQkE4Rjg5QkY1NjI0MkVDMjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODM5NjFCNUY4ODUwMTFFQkE4Rjg5QkY1NjI0MkVDMjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGMyZWIyMTUtYzlkOS1kMDQ4LWE2ZDAtNDNiYjAwYjE4MzQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmY2Y2YwODQxLTM3NDctYzI0NS1hZTdhLTRiOWM3OWI4MDU2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrglWFEAAARUSURBVHja3FppSBVRFB6nTWlBaRGUiiI1nxVBQrbRRqURLUQr9ad9oRI0cAmSqOhH9aM/EZUWBP2LKMmC6ofZIkYWLS5Pg1ZL/BFBqa/SzmHOo9dwZ97MXabpHfh47903d84935y595xzb1xra6vmUKYDrgHOAYo0b+QQYC9gKaDaA30DALWAOEAOoNMDndMA1/3Oa5wLR7kDmAf4ARgHeKvYmBTAa3p4NYBZHhC4A3Cavu8DnPJA523AfL/zqju8eQ45CUo/wH4PCCwgY1BmeuAofU12FQL6K9Y5lZzE97w6dZQS0+/NgGSFxgwDbIsyBtmyFjA24vdIwAbFOkt9wGupLEeZBFhiaksA5Cs0aA9gkKktFzBFkT7dIj4ocvEyuZWJPuF1kRNenZBQRMGdWXYBEhUYM5gMYkmxIgKXAbIY7WmA1Yp0FvuI1xJRR5ljQ9QQwEFAH8lvdhkgyeL/FYDZkglMIp1WUkZTtkxBXlf5iNflNCbbrAcHlEFIJ4S/D3cwCEwhg4BmQhN9vgJ8tSEj06QzjAQHOjsi9ETqbQT8suiTSjrNNo528FB6AG9M9jWTvncWfUR57WLYF41XnDUCJl1SeEVHwRRphoKp7jsgG9DAmM7rAQMV6HxEdQnW2qwq1cVM5TijvVpRpmbFK6bWT1XxqttMR6KCHhxvUdSKVxjVs2SowgAx0WZJ85LXeJW86hTIvZd8417AVpo5zPICsMVmieCVNkYWEZajgCsKCKzUjCqnVTwVM7yio7RoRjHtg0RjtgPO21xzgQzukaTzE9nQZPF/CLAOcFUigTcAK+neLIkpXsNZT5AaPkowZifgrINrK8ioXkGdn2nsjVGuwwe6RjP2q0SlimaMUJTrYobXyPS4mf5oEzBmN+CMiz7lgka105gbHF4forS0UoDAmw6dJKZ4NddRcOpeAPjJcfPD2p8NNTeCU+kBjn64Fi+kdNGNhGjJeMyhs56cpNtlPxFej/iBV1bB7SXgC4eC+wJvaS1Hn2+AZ5z60FnqOB2li1MnL681fuBVt0gxeSqR4wUMSufog0W7FAGdmRx9MgRT9/+WV5ajBDgHFRAwKMvjfrzj9VqfqE5pvOoSbx74ByQGBN7uERz9sLiW6vFD8wWvbh2lxSaQm6DA87tJp5cO1kFRv5czgx2vKmYx17w6XXowiMPzIGm07lUwijqJnDED6+3Ge18iXagTT4E9UbxkYaCJp9pGacahpQJyGpXO6ZRXnlkMty2SZfGqRwme8PzmRs3YhLoV0bYJMJlqCqKBV4BRp8gmveHzo3epbb1mnPcUDfQig1Lc/T4BGEOfnZQVnSQyj2l/H7LO5NTphtcqCUG0mddbIrzqFulYO71daeSBrJLwc0AeYK5m7NpiuTfIYVCQ+tZRrSFPY+9lYPHoMj2ofOpzTyBtxF3Yi0RKoUXqim3F9KDKqc9DTp1ueF0sgdcWE6+5Lnh9YL7otwADAFOMOKRn6MrCAAAAAElFTkSuQmCC");
  background-size: cover;
  width: 120px;
  height: 20px;
  z-index: 10;
  position: relative;
`;
const AverageStar = styled.div`
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAAXCAYAAADUf9f5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEzQTI1NjAzNUE1RTExRURBNTFCODczRDNFODUwMTI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEzQTI1NjA0NUE1RTExRURBNTFCODczRDNFODUwMTI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTNBMjU2MDE1QTVFMTFFREE1MUI4NzNEM0U4NTAxMjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTNBMjU2MDI1QTVFMTFFREE1MUI4NzNEM0U4NTAxMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6J28soAAAEU0lEQVR42txaaUgVURQep01pQWkRlIoiNZ8VQYK20UalES1EK/WnfcESNHAJkqjoR/WjPxGVFgT9iyjJguqH2SJGFi0uT4JWS/wRQamv0s5hzqPXcGfezF2m6R34eO/dN3fOPd+cufecc29cX0GO5lBmAK4BzgFKNG/kEGAvYBmg1gN9gwD1gDhALqDLA53TAdf9zmucC0e5A5gP+AGYAHir2JgUwGt6eHWA2R4QuBNwmr7vA5zyQOdtwAK/86o7vHkuOQnKAMB+DwgsImNQZnngKP1NdhUDBirWmUNO4ntenTpKmen3FkCyQmNGALZHGYNsWQcYH/F7NGCjYp3lPuC1XJajTAEsNbUlAAoVGlQAGGJqywNMU6RPt4gPSly8TG5lsk94XeyEVycklFBwZ5bdgEQFxgwlg1hSqojA5YAsRnsaYI0inaU+4rVM1FHm2hA1DHAQ0E/ym10BSLL4fyVgjmQCk0inlVTQlC1TkNfVPuJ1BY3JNuvBAWUQ0gnh7yMdDAJTyCCgldBCn68AX23IyDTpDCPBgc7OCD2RepsBvyz6pJJOs41jHTyUXsAbk32tpO+dRR9RXrsZ9kXjFWeNgEmXFF7RUTBFmqlgqvsOyAY0MabzRsBgBTofUV2CtTarSnUxUznOaK9VlKlZ8Yqp9VNVvOo205GooAfHWxS14hVG9SwZrjBATLRZ0rzkNV4lrzoFcu8l37gPsI1mDrO8AGy1WSJ4pZ2RRYTlKOCKAgKrNaPKaRVPxQyv6ChtmlFM+yDRmB2A8zbXXCCDeyXp/EQ2tFj8HwKsB1yVSOANwCq6N0tiitdw1hOkho8SjNkFOOvg2ioyqk9Q52cae3OU6/CBrtWM/SpRqaEZIxTlupjhNTI9bqU/2gWM2QM446JPpaBRHTTmJofXhygtrRYg8KZDJ4kpXs11FJy6FwJ+ctz8sPZnQ82N4FR6gKMfrsWLKF10IyFaMh5z6GwkJ+lx2U+E1yN+4JVVcHsJ+MKh4L7AW1rP0ecb4BmnPnSWBk5H6ebUyctrnR941S1STJ5K5EQBg9I5+mDRLkVAZyZHnwzB1P2/5ZXlKAHOQQUEDMryuB/veL3WJ6pTGq+6xJsH/gGJAYG3exRHPyyupXr80HzBq1tHabMJ5CYp8Pwe0umlg3VS1O/lzGDHq4pZzDWvTpceDOLwPEgarXtVjKJOImfMwHq78d6XSBfqxFNgTxQvWRho4qm2MZpxaKmInEalczrllWcWw22LZFm86lGCJzy/uUkzNqFuRbRtBkylmoJo4BVg1CmySW/4/OhdatugGec9RQO9yKAUd79PAMbRZxdlRSeJzGPa34esMzl1uuG1RkIQbeb1lgivukU61kFvVxp5IKsk/ByQD5inGbu2WO4NchgUpL4NVGvI19h7GVg8ukwPqpD63BNIG3EX9iKRUmyRumJbKT2oSurzkFOnG16XSOC1zcRrngteH5gv+i3AANspNNT5VdVKAAAAAElFTkSuQmCC");
  height: 100%;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
`;

function Overlay({ id }) {
  const location = useLocation();
  const cardData = location.state;

  console.log(location);

  const { isLoading, error, data } = useQuery("movieData", () =>
    fetch(
      location.pathname.includes("/tv")
        ? `https://api.themoviedb.org/3/tv/${id}?api_key=1efe7e9dcfe999d6d25a99f91164d434&language=ko-kr`
        : `https://api.themoviedb.org/3/movie/${id}?api_key=1efe7e9dcfe999d6d25a99f91164d434&language=ko-kr`
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

  function totalTime(value) {
    let totalTime = value;
    let hour = parseInt(totalTime / 60);
    let min = totalTime % 60;

    if (hour == 0 && min == 0) {
      return `정보없음`;
    } else {
      return `${hour}시간 ${min}분`;
    }
  }

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
              {data.adult && <Adult src={adult} />}
              <ModalBg backgroundImg={imgLink + cardData?.backdrop_path}>
                <Text color="rgb(229, 229, 229)" size="20px" weight="500">
                  {cardData?.original_name || cardData.original_title}
                </Text>
                <Text color="rgb(229, 229, 229)" size="40px" weight="bold">
                  {cardData?.name || cardData.title}
                </Text>
              </ModalBg>

              <Wrapper height="calc(100% - 400px)" display="flex" direction="column" justify="space-between">
                <Wrapper min-height="100%">
                  <Wrapper
                    display="flex"
                    align="center"
                    marginBottom="20px"
                    padding="20px 20px 0px 20px"
                  >
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
                          {`#${v?.name}`}
                        </Text>
                      </div>
                    ))}
                  </Wrapper>

                  <Wrapper
                    display="flex"
                    justify="space-between"
                    align="center"
                    margin="10px 0"
                    marginBottom="25px"
                    padding="6px 20px 0px 20px"
                  >
                    <Wrapper display="flex" align="center">
                      <BiCameraMovie color="green" />
                      <Text marginLeft="5px" color="rgb(229, 229, 229)">
                        {totalTime(
                          data.runtime || data.last_episode_to_air.runtime
                        )}
                      </Text>
                    </Wrapper>

                    <Wrapper display="flex" align="center">
                      <Text color="#ffffff" marginRight="5px">
                        별점:
                      </Text>

                      {data.vote_average > 0 ? (
                        <Text weight="bold" color="#ffffff" marginRight="10px">
                          {(data.vote_average / 2).toFixed(1)}
                        </Text>
                      ) : (
                        <Text color="#ffffff" marginRight="10px">
                          정보 없음
                        </Text>
                      )}

                      <AverageBox>
                        <AverageStar
                          style={{ width: data.vote_average * 10 + "%" }}
                        />
                      </AverageBox>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper display="flex" padding="0px 20px 20px 20px">
                    {data.overview !== "" ? (
                      <OverView color="#ffffff">{data.overview}</OverView>
                    ) : (
                      <Text color="#ffffff" size="13px">
                        제작사에서 내용을 준비중입니다.
                      </Text>
                    )}
                  </Wrapper>
                </Wrapper>

                <Wrapper
                  background="black"
                  position="relative"
                  left="0px"
                  bottom="0px"
                  width="100%"
                  padding="10px 20px"
                  height="44px"
                  display="flex"
                  align="center"
                  justify="flex-end"
                >
                  {data.production_companies != "" ? (
                    <OverView>
                      <span style={{ color: "#b2bec3" }}>
                        {`제작사: ${data.production_companies[0].name}(${data.production_companies[0].origin_country})`}
                      </span>
                    </OverView>
                  ) : (
                    <Text textAlign="end" color="#b2bec3" size="13px">
                      제작사 - InComing...
                    </Text>
                  )}
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
