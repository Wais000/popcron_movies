import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    links: {},
    popular: {},
    topRated: {},
    upcoming: {},
    tvPopular: {},
    tvTopRated: {},
    tvUpcoming: {},
    MovieTrending: {},
    TvShowTrending: {},
    seasonsDetail: {},
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
    getTvPopular: (state, action) => {
      state.tvPopular = action.payload;
    },
    getTvTopRated: (state, action) => {
      state.tvTopRated = action.payload;
    },
    getTvUpcoming: (state, action) => {
      state.tvUpcoming = action.payload;
    },
    getMovieTrending: (state, action) => {
      state.MovieTrending = action.payload;
    },
    getTvShowTrending: (state, action) => {
      state.TvShowTrending = action.payload;
    },
    getSeasonsDetail: (state, action) => {
      state.seasonsDetail = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
    getSearchResult: (state, action) => {
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
  getTvUpcoming,
  getTvTopRated,
  getTvPopular,
  getMovieTrending,
  getTvShowTrending,
  getGenres,
  getSearchResult,
  getSeasonsDetail,
} = moviesSlice.actions;

export default moviesSlice.reducer;
