import styled from "styled-components";
import { useLocation } from "react-router";
import Wrapper from "./Wrapper";
import Slider from "./Slider";

export function Search() {
  const { state } = useLocation();
  const movieData = state.movieData;
  const tvData = state.tvData;
  const searchFilter = state.value;

  const movieFilterData = {};
  const tvFilterData = {};

  function searchFilterFn(data, obj){
    Object.keys(data).map((key) => {
      obj[key] = data[key].filter(
        (v) => v.title && v.title.toLowerCase().trim().includes(searchFilter)
      );
    });
  }

  searchFilterFn(movieData, movieFilterData);
  searchFilterFn(tvData, tvFilterData);


  console.log(movieFilterData);

  const filterKey = Object.keys(movieFilterData).filter((key, i) => movieFilterData[key][i] != null);

  const asd = Object.keys(filterKey).map(key => movieFilterData[filterKey[key]])


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
        height="100vh"
        justify="center"
        align="center"
      >
        <Slider movieData={asd}>결과</Slider> 

      </Wrapper>
    </>
  );
}
