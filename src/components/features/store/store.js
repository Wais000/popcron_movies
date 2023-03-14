import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../movieSlice/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});
