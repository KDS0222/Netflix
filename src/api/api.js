import axios from "axios";

const API_KEY = "api_key=1efe7e9dcfe999d6d25a99f91164d434";

export const movieApi = {
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?${API_KEY}&language=ko-kr&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=ko-kr&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&language=ko-kr&page=1`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?${API_KEY}&language=ko-kr&page=1`,
};

export const tvApi = {
  airingToday: `https://api.themoviedb.org/3/tv/airing_today?language=ko-kr&page=1&${API_KEY}`,
  onTheAir: `https://api.themoviedb.org/3/tv/on_the_air?language=ko-kr&page=1&${API_KEY}`,
  popular: `https://api.themoviedb.org/3/tv/popular?language=ko-kr&page=1&${API_KEY}`,
  topRated: `https://api.themoviedb.org/3/tv/top_rated?language=ko-kr&page=1&${API_KEY}`,
};


export const getMovies = async (data) => {
  return await axios.get(data);
};


/*

now_playing
popular
top_rated
upcoming


airing_today
on_the_air
popular
top_rated


*/