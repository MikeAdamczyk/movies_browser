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
        fetchMovie: (state) => {
            state.isLoading = true;
        },
        fetchMovieSucces: (state, {payload}) => {
            state.isLoading = false;
            state.currentPage = payload.page;
            state.totalPages = payload.total_pages;
            state.totalResults = payload.total_results;
            state.results = payload.results;
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

