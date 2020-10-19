import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    isSearchLoading: false,
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
    results: [],
    isError: false,
  },
  reducers: {
    fetchMovies: (state, {payload}) => {
      state.isLoading = true;
    },
    fetchMoviesByQuery: (state, {payload}) => {
      state.isSearchLoading = true;
    },
    fetchDifferentPageSearchedMovies: (state, {payload}) => {
      state.isSearchLoading = true;
    },
    fetchMoviesSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.isSearchLoading = false;
      state.currentPage = payload.page;
      state.totalPages = payload.total_pages;
      state.totalResults = payload.total_results;
      state.results = payload.results;
    },
    fetchMoviesError: (state) => {
      state.isLoading = false;
      state.isSearchLoading = false;
      state.isError = true;
    },
    setNextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage = state.currentPage + 1;
      }
      return;
    },
    setLastPage: (state) => {
      state.currentPage = state.totalPages;
    },
    setPreviousPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage = state.currentPage - 1;
      }
      return;
    },
    setFirstPage: (state) => {
      state.currentPage = 1;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMoviesByQuery,
  fetchDifferentPageSearchedMovies,
  setNextPage,
  setLastPage,
  setPreviousPage,
  setFirstPage
} = moviesSlice.actions;

export const selectMovies = (state) => state.movies.results;
export const selectCurrentPage = (state) => state.movies.currentPage;
export const selectTotalPages = (state) => state.movies.totalPages;
export const selectTotalResults = (state) => state.movies.totalResults;
export const selectLoadingSearchStatus = (state) => state.movies.isSearchLoading;
export const selectErrorStatus = (state) => state.movies.isError;

export default moviesSlice.reducer;

