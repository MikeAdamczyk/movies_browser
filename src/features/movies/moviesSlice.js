import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    results: [],
    total_pages: 0,
    page: 1,
    total_results: 0,
  },
  reducers: {
    fetchMovie: (state) => {
      state.isLoading = true;
    },
    fetchMovieSucces: (state, { payload }) => {
      state.results = payload.results;
      state.total_pages = payload.total_pages;
      state.page = payload.page;
      state.total_results = payload.total_results;
      state.isLoading = false;
    },
    fetchMovieError: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchMovie,
  fetchMovieSucces,
  fetchMovieError,
} = moviesSlice.actions;
export const selectMovie = (state) => state.movies.results;

export default moviesSlice.reducer;
