import Nav from "./components/Nav";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import { useQuery } from "react-query";
import { getMovies, movieApi } from "./api/api";

function App() {
  const { isLoading, error, data } = useQuery(
    "movieData",
    async () =>
      await getMovies(movieApi.newPlaying).then(
        (res) => {
          return res.data.results;
        },
        {
          cacheTime: 60000, // 1분 동안 캐시로 저장
          staleTime: 10000, // 10초 이내에는 캐시된 결과를 사용
        }
      )
    // getMovies(movieApi.popular).then((res) => res.data.results.slice(10)),
    // getMovies(movieApi.topRated).then((res) => res.data.results.slice(10)),
    // getMovies(movieApi.upcoming).then((res) => res.data.results.slice(10)),
  );

  const movieData = data;

  console.log(movieData);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App" style={{ position: "relative" }}>
      <Nav />
      <Main movieData={movieData} />

      <Routes>
        <Route path="/Modal" element={<Modal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
