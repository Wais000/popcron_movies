import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const POPCORN_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzU5YjQ0NDNkYWU5NzgzMTNiNDc0MjRiMzJkYmUyYSIsInN1YiI6IjYzZjc0NTVlMWYzMzE5MDA5ZWJmMGRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mt8uEcOgtDL_EIODJeYdL8o7-EBCKQ8j5gM7KoJGI9E"
//  import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + POPCORN_TOKEN ,
};

export const fetchData = async (url, params) => {
  try {
    const { data } = await axios.get(baseUrl + url, {
      headers,
      params,
    })
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
