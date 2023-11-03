import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import { useQuery } from "react-query";
import { getMovies, movieApi, tvApi } from "./api/api";
import { Loading } from "./components/Loading";
import { Tv } from "./components/pages/Tv";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const {
    isLoding: nowLoading,
    error: nowError,
    data: nowPlaying,
  } = useQuery(
    "movieNowPlaying",
    async () => getMovies(movieApi.nowPlaying).then((res) => res.data.results),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const {
    isLoding: popularLoading,
    error: popularError,
    data: popular,
  } = useQuery(
    "moviePopular",
    async () => getMovies(movieApi.popular).then((res) => res.data.results),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const {
    isLoding: topRatedLoading,
    error: topRatedError,
    data: topRated,
  } = useQuery(
    "movieTopRated",
    async () => getMovies(movieApi.topRated).then((res) => res.data.results),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  const {
    isLoding: upcomingLoading,
    error: upcomingError,
    data: upcoming,
  } = useQuery(
    "movieUpcoming",
    async () => getMovies(movieApi.upcoming).then((res) => res.data.results),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  // tv

  const {
    isLoding: tvTodayLoading,
    error: tvTodayError,
    data: tvToday,
  } = useQuery(
    "tvAiringToday",
    async () => getMovies(tvApi.airingToday).then((res) => res.data.results),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const {
    isLoding: tvAirLoading,
    error: tvAirError,
    data: tvTheAir,
  } = useQuery(
    "tvOnTheAir",
    async () => getMovies(tvApi.onTheAir).then((res) => res.data.results),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const {
    isLoding: tvPopularLoading,
    error: tvPopularError,
    data: tvPopular,
  } = useQuery(
    "tvPopular",
    async () => getMovies(tvApi.popular).then((res) => res.data.results),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const {
    isLoding: tvTopRatedLoading,
    error: tvTopRatedError,
    data: tvTopRated,
  } = useQuery(
    "tvTopRated",
    async () => getMovies(tvApi.topRated).then((res) => res.data.results),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const movieData = {
    nowPlaying: nowPlaying,
    popular: popular,
    topRated: topRated,
    upcoming: upcoming,
  };

  const tvData = {
    airingToday: tvToday,
    onTheAir: tvTheAir,
    popular: tvPopular,
    topRated: tvTopRated,
  };

  
  return (
    <div className="App" style={{ position: "relative" }}>
      <Nav movieData={movieData} tvData={tvData} />

      {nowLoading && popularLoading && topRatedLoading && upcomingLoading && (
        <Loading />
      )}

      <Routes>
        <Route
          path="/"
          element={nowPlaying && <Main movieData={movieData} />}
        ></Route>
        <Route path="/tv" element={<Tv tvData={tvData} />}></Route>
        <Route path="/Modal" element={<Modal />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
