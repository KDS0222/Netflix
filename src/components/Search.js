import styled from "styled-components";
import { useLocation } from "react-router";
import Wrapper from "./Wrapper";
import Slider from "./Slider";
import { useSearchParams } from "react-router-dom";
import { SearchResult } from "./SearchResult";
import Text from "./Text";

export function Search() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { state } = useLocation();
  const movieData = state.movieData;
  const tvData = state.tvData;

  const movieFilterData = {};
  const tvFilterData = {};

  const keyWord = searchParams.get("keyword");

  Object.keys(movieData).map((key) => {
    if (
      movieData[key].filter(
        (v) => v.title && v.title.toLowerCase().trim().includes(keyWord)
      ).length > 0
    ) {
      movieFilterData[key] = movieData[key].filter(
        (v) => v.title && v.title.toLowerCase().trim().includes(keyWord)
      );
    }
  });

  Object.keys(tvData).map((key) => {
    if (
      tvData[key].filter(
        (v) => v.name && v.name.toLowerCase().trim().includes(keyWord)
      ).length > 0
    ) {
      tvFilterData[key] = tvData[key].filter(
        (v) => v.name && v.name.toLowerCase().trim().includes(keyWord)
      );
    }
  });

  let movieTemp = [];
  let tvTemp = [];

  function total() {
    Object.keys(movieFilterData).map((key) =>
      movieTemp.push(...movieFilterData[key])
    );

    Object.keys(tvFilterData).map((key) => tvTemp.push(...tvFilterData[key]));

    const movieArray = movieTemp.filter((item, i) => {
      return (
        movieTemp.findIndex((item2, j) => {
          return item.id === item2.id;
        }) === i
      );
    });

    const tvArray = tvTemp.filter((item, i) => {
      return (
        tvTemp.findIndex((item2, j) => {
          return item.id === item2.id;
        }) === i
      );
    });

    movieTemp = movieArray;
    tvTemp = tvArray;
  }

  console.log(movieTemp);
  console.log(tvTemp);

  total();

  // console.log(movieFilterData);
  // console.log(tvFilterData);

  // ! filterKey에서 topRated, upcoming 둘다 나와야하는데 topRated만 나오니까 이 부분 수정하면 검색부분은 끝난다.
  // ! tv쪽은 title이 아닌 name으로 변경한다.

  // const asd = Object.keys(filterKey).map(key => movieFilterData[filterKey[key]])

  // const filterKey = Object.keys(movieFilterData).filter((key, i) => {
  //   if (movieFilterData[key][i] != undefined) {
  //     asd.push(
  //       {
  //         key: movieFilterData[key]
  //       }

  //     );
  //   }
  // });

  return (
    <>
      <Wrapper
        padding="70px 0 0 0"
        height="100%"
        justify="center"
        align="center"
      >
        {movieTemp.length > 0 || tvTemp.length > 0 ? (
          <>
            <SearchResult movieData={movieTemp}>영화 검색결과</SearchResult>
            <SearchResult tvData={tvTemp}>TV 검색결과</SearchResult>
          </>
        ) : (
          <Wrapper height="calc(100vh - 70px)" display="flex" justify="center" align="center">
            <Text size="32px" weight="bold">검색결과가 없습니다.</Text>
          </Wrapper>
        )}
      </Wrapper>
    </>
  );
}
