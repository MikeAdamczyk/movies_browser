import {createSlice} from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        isLoading: false,
        currentPage: 1,
        totalPages: 1,
        totalResults: 0,
        results: [],
    },
    reducers: {
        fetchMovies: (state, {payload}) => {
            state.isLoading = true;
        },
        fetchMoviesByQuery: (state, {payload}) => {
            state.isLoading = true;
        },
        fetchMoviesSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.currentPage = payload.page;
            state.totalPages = payload.total_pages;
            state.totalResults = payload.total_results;
            state.results = payload.results;
        },
        fetchMoviesError: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError,
    fetchMoviesByQuery,
} = moviesSlice.actions;

export const selectMovies = (state) => state.movies.results;
export const selectCurrentPage = (state) => state.movies.currentPage;
export const selectTotalPages = (state) => state.movies.totalPages;
export const selectTotalResults = (state) => state.movies.totalResults;

export default moviesSlice.reducer;

