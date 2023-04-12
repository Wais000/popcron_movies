import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    links: {},
    popular: {},
    topRated: {},
    upcoming: {},
    MovieTrending: {},
    TvShowTrending: {},
    categories: {},
    searchRersult: {},
    
  },
  reducers: {
    getUrl: (state, action) => {
      state.links = action.payload;
    },
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    getPopular: (state, action) => {
      state.popular = action.payload;
    },
    getTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    getUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    getMovieTrending: (state, action) => {
      state.MovieTrending = action.payload;
    },
    getTvShowTrending: (state, action) => {
      state.TvShowTrending = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
    getSearchRersult: (state, action) => {
      state.searchRersult = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getUrl,
  getCategories,
  getUpcoming,
  getTopRated,
  getPopular,
  getMovieTrending,
  getTvShowTrending,
  getGenres,
  getSearchRersult,
} = moviesSlice.actions;

export default moviesSlice.reducer;
