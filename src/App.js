import Nav from "./components/Nav";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import { useQuery } from "react-query";
import { getMovies, movieApi } from "./api/api";
import { Loading } from "./components/Loading";

function App() {
  const {
    isLoding: nowLoading,
    error: nowError,
    data: nowPlaying,
  } = useQuery("movieNowPlaying", () =>
    getMovies(movieApi.nowPlaying).then((res) => res.data.results)
  );

  const {
    isLoding: popularLoading,
    error: popularError,
    data: popular,
  } = useQuery("moviePopular", () =>
    getMovies(movieApi.popular).then((res) => res.data.results)
  );

  const {
    isLoding: topRatedLoading,
    error: topRatedError,
    data: topRated,
  } = useQuery("movieTopRated", () =>
    getMovies(movieApi.topRated).then((res) => res.data.results)
  );

  const {
    isLoding: upcomingLoading,
    error: upcomingError,
    data: upcoming,
  } = useQuery("movieUpcoming", () =>
    getMovies(movieApi.upcoming).then((res) => res.data.results)
  );

  const movieData = {
    nowPlaying: nowPlaying,
    popular: popular,
    topRated: topRated,
    upcoming: upcoming,
  };

  return (
    <div className="App" style={{ position: "relative" }}>
      <Nav />

      {nowLoading && <Loading />}
      {nowPlaying && <Main movieData={movieData} />}

      <Routes>
        <Route path="/Modal" element={<Modal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
