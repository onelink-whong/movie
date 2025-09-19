import axios from "axios";
const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/movie/',
  params:{
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  }
})
export default api;
