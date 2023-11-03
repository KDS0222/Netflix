import styled from "styled-components";
import { useLocation } from "react-router";
import Wrapper from "./Wrapper";
import Slider from "./Slider";
import { useSearchParams } from "react-router-dom";

export function Search() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { state } = useLocation();
  const movieData = state.movieData;
  const tvData = state.tvData;

  const movieFilterData = {};
  const tvFilterData = {};

  const keyWord = searchParams.get('keyword');
  


  Object.keys(movieData).map((key) => {
    if (movieData[key].filter((v) => v.title && v.title.toLowerCase().trim().includes(keyWord)).length > 0) {
      movieFilterData[key] = movieData[key].filter((v) => v.title && v.title.toLowerCase().trim().includes(keyWord))
    }
  });

  Object.keys(tvData).map((key) => {
    if (tvData[key].filter((v) => v.name && v.name.toLowerCase().trim().includes(keyWord)).length > 0) {
      tvFilterData[key] = tvData[key].filter((v) => v.name && v.name.toLowerCase().trim().includes(keyWord))
    }
  });


  console.log(movieFilterData);
  console.log(tvFilterData);




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
        {
          
        }
        <Slider movieData={asd[0]}>결과</Slider> 

      </Wrapper>
    </>
  );
}
